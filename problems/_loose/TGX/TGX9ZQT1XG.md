---
tag: TGX9ZQT1XG
kind: problem
type: answer
answer: 2 \left( \frac{2}{p} \right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245950
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime with $p \equiv 1 \pmod{4}$. Let $a$ be the unique integer such that $$p=a^{2}+b^{2}, a \equiv-1 \pmod{4}, b \equiv 0 \pmod{2}$$ Prove that $$\sum^{p-1}_{i=0}\left( \frac{i^{3}+6i^{2}+i }{p}\right) = 2 \left( \frac{2}{p}\right),$$ where $\left(\frac{k}{p}\right)$ denotes the Legendre Symbol.
