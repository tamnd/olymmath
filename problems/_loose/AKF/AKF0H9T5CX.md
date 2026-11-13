---
tag: AKF0H9T5CX
kind: problem
type: answer
answer: "2342398945624433584"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=259
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Let say a 52-digit number $\overline{a_1a_2\ldots a_{52}}$ is "zig-zag" if
$$
a_1 \le a_2 \ge a_3 \le a_4 \ge \dots \le a_{50} \ge a_{51} \le a_{52}
$$
holds. Find the number of all zig-zag numbers composed of the digits $1$, $2$ and $3$.
