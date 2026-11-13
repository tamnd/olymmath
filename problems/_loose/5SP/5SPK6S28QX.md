---
tag: 5SPK6S28QX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91608
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $p$ is a prime. Prove:
$$
\Phi_{p m}(x)=\left\{\begin{array}{ll}
\Phi_{m}\left(x^{p}\right), & p \mid m \\
\frac{\Phi_{m}\left(x^{p}\right)}{\Phi_{m}(x)}, & p \nmid m .
\end{array}\right.
$$
