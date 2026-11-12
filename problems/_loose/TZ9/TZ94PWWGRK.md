---
tag: TZ94PWWGRK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33768
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the random variable $X$ be such that

$$
\varlimsup_{n} \frac{\mathrm{P}(|X|>2 n)}{\mathrm{P}(|X|>n)}<\frac{1}{2}
$$

Prove that then $\mathbf{E}|X|<\infty$.
