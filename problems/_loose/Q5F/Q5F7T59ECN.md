---
tag: Q5F7T59ECN
kind: problem
type: answer
answer: "350"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264554
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the sum of $$\frac{\sigma(n) \cdot d(n)}{ \phi (n)}$$ over all positive $n$ that divide $ 60$.

Note: The function $d(i)$ outputs the number of divisors of $i$, $\sigma (i)$ outputs the sum of the factors of $i$, and $\phi (i)$ outputs the number of positive integers less than or equal to $i$ that are relatively prime to $i$.
