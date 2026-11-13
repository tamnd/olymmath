---
tag: 32VGE8MTDG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248307
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define $E\subseteq \{f:[0,1]\to \mathbb{R}\mid f \textnormal{ is Riemann-integrable}\}$ such that $E$ posseses the following properties:\\
$\textbf{(i)}$ If $\int_0^1 f(x)g(x) dx = 0$ for $f\in E$ with $\int_0^1f^2(t)dt \neq 0$, then $g\in E$; \\
$\textbf{(ii)}$ There exists $h\in E$ with $\int_0^1 h^2(t)dt\neq 0$.\\
Prove that $E=\{f:[0,1]\to \mathbb{R}\mid f \textnormal{ is Riemann-integrable}\}$.
\\
*(Andrei Bâra)*
