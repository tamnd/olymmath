---
tag: 7AQATRQ9YD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1984 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h384238
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=43962
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240235
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1984
    source: hf-ai-mo-aops
    label: 1984 Iran MO (2nd round)
---
Let $f : \mathbb R \to \mathbb R$ be a function such that
$$f(x+y)=f(x) \cdot f(y) \forall x,y \in \mathbb R$$
Suppose that $f(0) \neq 0$ and $f(0)$ exists and it is finite $(f(0) \neq \infty)$ . Prove that $f$ has derivative in each point $x \in \mathbb R.$
