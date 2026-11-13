---
tag: D53ACEA5XQ
kind: problem
type: answer
answer: f(x) = a - x \quad \forall x \in \mathbb{Q}, \text{ where } a \in \mathbb{Q}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f : Q \to Q$, such that $$f(x + f (y + f(z))) = y + f(x + z)$$ for all $x ,y ,z \in Q$ .

(I. Voronovich)
