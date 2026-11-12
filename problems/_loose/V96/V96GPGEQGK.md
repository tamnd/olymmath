---
tag: V96GPGEQGK
kind: problem
type: answer
answer: "495"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=53567
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a three-digit number $\overline{a b c}$, we take $\overline{c b a}$ and subtract the smaller from the larger. We get the number $\overline{a_{1}^{1}} \overline{b_{1}} \overline{1} \bar{c}_{1}^{-}$, and do the same with it, and so on.

Prove that at some step we will get either the number 495 or 0. The case $a_{1}=0$ is allowed.
