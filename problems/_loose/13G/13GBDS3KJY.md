---
tag: 13GBDS3KJY
kind: problem
type: answer
answer: For x = p/q in lowest terms with p, q positive integers, f(x) = p.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=143
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $Q^+$ be the set of all positive rational numbers. Find all functions $f : Q^+ \to Q^+$ satisfying $f(1) = 1$ and
$f(x+n) = f(x) + n f(\frac{1}{x})$ for all positive integers $n$ and $\forall x \in Q^+$.
