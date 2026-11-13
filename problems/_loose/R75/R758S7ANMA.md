---
tag: R758S7ANMA
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=196
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2020
    source: hf-mathnet
    label: Greece 37th Hellenic Mathematical Olympiad 2020
---
Find all values of the positive integer $\kappa$ satisfying the following property:
There do not exist positive integers $\alpha, \beta$ such that the number
$$
A(\kappa, \alpha, \beta) = \frac{\alpha + \beta}{\alpha^2 + \kappa^2 \beta^2 - \kappa^2 \alpha \beta}
$$
is a composite positive integer.
