---
tag: 5GKM6SK4T6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34089
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi$ and $\eta$ be independent random variables, and $\eta \sim \mathscr{N}(0,1)$. Let also $f=f(x)$ be a bounded Borel function with compact support. Show that for any $\sigma>0$ the following equality holds:

$$
\mathrm{E} f(\xi+\sigma \eta)=\frac{1}{2 \pi} \int_{\mathbb{R}} e^{-\frac{\sigma^{2} t^{2}}{2}} \varphi(t) \widehat{f}(-t) d t
$$

where $\varphi(t)=\mathrm{E} e^{i t \xi}$ and $\hat{f}(t)=\int_{\mathbb{R}} e^{i t x} f(x) d x$.

Formulate an analogous result for vector-valued variables $\xi$ and $\eta$.
