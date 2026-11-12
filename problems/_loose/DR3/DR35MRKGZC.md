---
tag: DR35MRKGZC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that $\alpha=\left(\alpha_{1}, \alpha_{2}, \alpha_{3}\right) \succ \beta=\left(\beta_{1}, \beta_{2}, \beta_{3}\right)$ if and only if $\beta$ can be obtained from $\alpha$ by performing several (possibly one or none) operations of the form

$$
(k, j, i) \leftrightarrow(k-1, j+1, i), (k, j, i) \leftrightarrow(k-1, j, i+1), (k, j, i) \leftrightarrow(k, j-1, i+1) .
$$

(These operations can be visualized as dropping one block down in a Young diagram. See here for Young diagrams)
