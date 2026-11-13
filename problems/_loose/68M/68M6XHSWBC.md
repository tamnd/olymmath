---
tag: 68M6XHSWBC
kind: problem
type: answer
answer: 0<x<45,\quad90<x<180,\quad180<x<240,\quad270<x<315
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=173334
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For which angles between $0^{\circ}$ and $360^{\circ}$ do at least two of the following inequalities hold:

$$
\sin 2 x>\sin x, \cos 2 x>\cos x, \operatorname{tg} 2 x>\operatorname{tg} x, \operatorname{ctg} 2 x>\operatorname{ctg} x
$$

Is there an angle for which none of the given inequalities hold? (As a starting point, we can draw the graphs of the functions in question!)
