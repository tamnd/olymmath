---
tag: 7SYBSAQ5JV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186872
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Soviet_Union/train/0000.parquet#row=5
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Soviet Union 1st ASU
---
(a) Given a quadruple ( $\mathrm{a}, \mathrm{b}, \mathrm{c}, \mathrm{d}$ ) of positive reals, transform to the new quadruple ( $\mathrm{ab}, \mathrm{bc}, \mathrm{cd}$, da). Repeat arbitarily many times. Prove that you can never return to the original quadruple unless $\mathrm{a}=\mathrm{b}=\mathrm{c}=\mathrm{d}=1$.

(b) Given $n$ a power of 2 , and an $n$-tuple $\left(a_{1}, a_{2}, \ldots, a_{n}\right)$ transform to a new $n$-tuple $\left(a_{1} a_{2}, a_{2} a_{3}\right.$, $\ldots, a_{n-1} a_{n}, a_{n} a_{1}$ ). If all the members of the original $n$-tuple are 1 or -1 , prove that with sufficiently many repetitions you obtain all $1 \mathrm{~s}$.
