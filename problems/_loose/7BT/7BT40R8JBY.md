---
tag: 7BT40R8JBY
kind: problem
type: answer
answer: \left|\sum_{j=0}^{n-1} (a+ib)^j\right| \in \mathbb{Q}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209897
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all odd natural numbers $ n, $ prove that
$$ \left|\sum_{j=0}^{n-1} (a+ib)^j\right|\in\mathbb{Q} , $$
where $ a,b\in\mathbb{Q} $ are two numbers such that $ 1=a^2+b^2. $
