---
tag: 99G9PQFCZE
kind: problem
type: answer
answer: E
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=163095
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0001.parquet#row=173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2015
    source: hf-mathnet
    label: Slovenia National Math Olympiad 2015 – First Round
---
For which integer $n$ does the following hold

$$
(n-1)(n-3) \ldots(n-2015)=n(n+2)(n+4) \ldots(n+2014) ?
$$

(A) -4028
(B) -2014
(C) 2015
(D) 4030
(E) None.
