---
tag: 7DC0FCTWR1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h226816
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=24965
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225652
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1989
    source: hf-ai-mo-aops
    label: 1989 IMO Longlists
---
An accurate 12-hour analog clock has an hour hand, a minute hand, and a second hand that are aligned at 12:00 o'clock and make one revolution in 12 hours, 1 hour, and 1 minute, respectively. It is well known, and not difficult to prove, that there is no time when the three hands are equally spaced around the clock, with each separating angle $ \frac{2 \cdot \pi}{3}.$ Let $ f(t), g(t), h(t)$ be the respective absolute deviations of the separating angles from \frac{2 \cdot \pi}{3} at $ t$ hours after 12:00 o'clock. What is the minimum value of $ max\{f(t), g(t), h(t)\}?$
