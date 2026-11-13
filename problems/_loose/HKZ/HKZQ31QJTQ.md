---
tag: HKZQ31QJTQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220744
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x) = \sqrt{4x^2 - 4x^4}$. Let $A$ be the number of real numbers $x$ that satisfy
$$f(f(f(\dots f(x)\dots ))) = x,$$ where the function $f$ is applied to $x$ 2020 times. Compute $A \pmod {1000}$.

*Proposed by Timothy Qian*
