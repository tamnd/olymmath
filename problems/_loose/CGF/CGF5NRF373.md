---
tag: CGF5NRF373
kind: problem
type: answer
answer: "20"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms
    source: hf-mathnet
    label: Greece 39th Hellenic Mathematical Olympiad
---
On a blackboard we write in a line $n$ numbers, $n \ge 40$, each being equal to $1$ or $-1$, such that:
(i) The sum of every $40$ successive numbers is equal to $0$.
(ii) The sum of every $42$ successive numbers is not equal to $0$.

We denote by $\Sigma_n$ the sum of the $n$ numbers on the blackboard. Find the greatest possible value of $\Sigma_n$.
