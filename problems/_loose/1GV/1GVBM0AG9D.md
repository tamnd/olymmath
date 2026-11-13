---
tag: 1GVBM0AG9D
kind: problem
type: answer
answer: e^x x \cos^4(e^x)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238729
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$(a)$ Compute -
\begin{align*}
\frac{\mathrm{d}}{\mathrm{d}x} \bigg[ \int_{0}^{e^x} \log ( t ) \cos^4 ( t ) \mathrm{d}t \bigg]
\end{align*}
$(b)$ For $x > 0 $ define $F ( x ) = \int_{1}^{x} t \log ( t ) \mathrm{d}t . $\\
\\$1.$ Determine the open interval(s) (if any) where $F ( x )$ is decreasing and all the open interval(s) (if any) where $F ( x )$ is increasing.\\
\\$2.$ Determine all the local minima of $F ( x )$ (if any) and all the local maxima of $F ( x )$ (if any) $.$
