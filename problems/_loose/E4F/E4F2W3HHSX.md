---
tag: E4F2W3HHSX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82366
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a horizontal road bordering a ravine, there are $n$ temples. Each of these temples is guarded by two elephants that have their backs turned to it, one immediately to the left of the temple and the other immediately to its right. These $2n$ elephants are all of different sizes. When an elephant moves along the road, it tramples any elephant that has its back turned to it. Conversely, in a face-to-face encounter, the smaller of the two elephants is always trampled by the larger one. An elephant always moves in the same direction until it is eventually trampled by another (and, in this case, falls into the ravine with no hope of return). Show that there exists a unique temple $t$ that is untouchable, that is, for any elephant $e$, if $e$ starts to move while all the other elephants remain stationary, $e$ will not be able to reach $t$.
