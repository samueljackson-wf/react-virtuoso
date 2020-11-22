import {
  publish,
  subscribe,
  debounceTime,
  distinctUntilChanged,
  duc,
  system,
  mapTo,
  merge,
  pipe,
  skip,
  statefulStreamFromEmitter,
  tup,
  statefulStream,
  stream,
  connect,
  combineLatest,
  map,
} from '@virtuoso.dev/urx'
import { domIOSystem } from './domIOSystem'

export interface ListBottomInfo {
  bottom: number
  offsetBottom: number
}

export const stateFlagsSystem = system(([{ scrollTop, viewportHeight }]) => {
  const isAtBottom = statefulStream(false)
  const isAtTop = statefulStream(true)
  const atBottomStateChange = stream<boolean>()
  const atTopStateChange = stream<boolean>()
  const listStateListener = stream<ListBottomInfo>()

  // skip 1 to avoid an initial on/off flick
  const isScrolling = statefulStreamFromEmitter(
    pipe(
      merge(pipe(duc(scrollTop), skip(1), mapTo(true)), pipe(duc(scrollTop), skip(1), mapTo(false), debounceTime(200))),
      distinctUntilChanged()
    ),
    false
  )

  connect(
    pipe(
      duc(scrollTop),
      map(top => top === 0),
      distinctUntilChanged()
    ),
    isAtTop
  )

  connect(isAtTop, atTopStateChange)

  connect(
    pipe(
      combineLatest(duc(listStateListener), duc(scrollTop), duc(viewportHeight)),
      map(([{ bottom, offsetBottom }, scrollTop, viewportHeight]) => {
        // console.log(offsetBottom === 0 && scrollTop + viewportHeight - bottom > -4)
        return offsetBottom === 0 && scrollTop + viewportHeight - bottom > -4
      }),
      distinctUntilChanged()
    ),
    isAtBottom
  )

  subscribe(isAtBottom, value => {
    setTimeout(() => publish(atBottomStateChange, value))
  })

  // connect(isAtBottom, atBottomStateChange)

  return { isScrolling, isAtTop, isAtBottom, atTopStateChange, atBottomStateChange, listStateListener }
}, tup(domIOSystem))
