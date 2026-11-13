---
tag: P7Y5EQKXYP
kind: problem
type: answer
answer: \text{True}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247127
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=229
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(a) Show that, if $I \subset R$ is a closed bounded interval, and $f : I \to R$ is a non-constant monic polynomial function such that $max_{x\in I}|f(x)|< 2$, then there exists a non-constant monic polynomial function $g : I \to R$ such that $max_{x\in I} |g(x)| < 1$.
(b) Show that there exists a closed bounded interval $I \subset R$ such that $max_{x\in I}|f(x)| \ge 2$ for every non-constant monic polynomial function $f : I \to R$.
