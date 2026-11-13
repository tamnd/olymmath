---
tag: GAGVY8RFBY
kind: problem
type: answer
answer: a_{1}=1,a_{2}=3,a_{3}=4,a_{4}=9
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146439
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$A=\left\{a_{1}, a_{2}, a_{3}, a_{4}\right\}, B=\left\{a_{1}^{2}, a_{2}^{2}, a_{3}^{2}, a_{4}^{2}\right\}$. Here, $a_{1}<a_{2}<a_{3}<a_{4}, a_{1}, a_{2}, a_{3}, a_{4} \in \mathbf{N}^{\top}$. If $A \cap B=\left\{a_{1}, a_{4}\right\}, a_{1}+a_{4}=10$, and the sum of all elements in $A \cup B$ is 124. Find the sets $A$ and $B$.
