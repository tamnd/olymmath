---
tag: EGQTK15PD9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177846
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=52
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 65th Romanian Mathematical Olympiad
---
Let $f:[1,+\infty) \rightarrow(0,+\infty)$ be a continuous function with the following properties:

(i) the function $g:[1,+\infty) \rightarrow(0,+\infty)$ given by $g(x)=\frac{f(x)}{x}$ has a limit at $+\infty$;

(ii) the function $h:[1,+\infty) \rightarrow(0,+\infty)$ given by $h(x)=\frac{1}{x} \int_{1}^{x} f(t) \mathrm{d} t$ has a finite limit at $+\infty$.

a) Show that $\lim _{x \rightarrow+\infty} g(x)=0$.

b) Show that $\lim _{x \rightarrow+\infty} \frac{1}{x^{2}} \int_{1}^{x} f^{2}(t) \mathrm{d} t=0$.
