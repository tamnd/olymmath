---
tag: WQ2ME8QENC
kind: problem
type: answer
answer: f(x) = x \pmod{10^{10}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251321
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S=\{1,2, \ldots ,10^{10}\}$. Find all functions $f:S \rightarrow S$, such that $$f(x+1)=f(f(x))+1 \pmod {10^{10}}$$ for each $x \in S$ (assume $f(10^{10}+1)=f(1)$).
