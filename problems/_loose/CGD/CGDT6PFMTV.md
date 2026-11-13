---
tag: CGDT6PFMTV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1688
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85368
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Vind alle viertallen $\left(x_{1}, x_{2}, x_{3}, x_{4}\right)$ van reële getallen zodat de volgende zes gelijkheden gelden:

$$
\begin{aligned}
& x_{1}+x_{2}=x_{3}^{2}+x_{4}^{2}+6 x_{3} x_{4}, \\
& x_{1}+x_{3}=x_{2}^{2}+x_{4}^{2}+6 x_{2} x_{4}, \\
& x_{1}+x_{4}=x_{2}^{2}+x_{3}^{2}+6 x_{2} x_{3}, \\
& x_{2}+x_{3}=x_{1}^{2}+x_{4}^{2}+6 x_{1} x_{4}, \\
& x_{2}+x_{4}=x_{1}^{2}+x_{3}^{2}+6 x_{1} x_{3}, \\
& x_{3}+x_{4}=x_{1}^{2}+x_{2}^{2}+6 x_{1} x_{2} .
\end{aligned}
$$
