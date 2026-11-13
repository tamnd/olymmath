---
tag: TRVA3MY3DY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268987
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f,g,h : \mathbb R \to \mathbb R$ be continuous functions and $X$ be a random variable such that $E(g(X)h(X))=0$ and $E(g(X)^2) \neq 0 \neq E(h(X)^2)$. Prove that $$E(f(X)^2) \geq \frac{E(f(X)g(X))^2}{E(g(X)^2)} + \frac{E(f(X)h(X))^2}{E(h(X)^2)}.$$ You may assume that all expected values exist.

*Proposed by Cristi Calin*
