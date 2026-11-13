---
tag: 19RZSKSF3Q
kind: problem
type: answer
answer: H \text{ is the orthocenter of } \Delta ABC
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237537
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$ \Delta ABC$ is a triangle such that $ AB \neq AC$. The incircle of $ \Delta ABC$ touches $ BC, CA, AB$ at $ D, E, F$ respectively. $ H$ is a point on the segment $ EF$ such that $ DH \bot EF$. Suppose $ AH \bot BC$, prove that $ H$ is the orthocentre of $ \Delta ABC$.

Remark: the original question has missed the condition $ AB \neq AC$
