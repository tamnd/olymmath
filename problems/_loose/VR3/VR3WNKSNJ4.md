---
tag: VR3WNKSNJ4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33801
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(On the connection between Lebesgue and Riemann integration.) Let the Borel function $f=f(x), x \in \mathbb{R}$, be integrable with respect to the Lebesgue measure $\lambda$ $\left(\int_{\mathbb{R}}|f(x)| d \lambda < \infty\right)$. For any $\varepsilon > 0$, there exist

(a) a step function $f_{\varepsilon}(x)=\sum_{i=1}^{n} f_{i} I_{\left[a_{i}, b_{i}\right)}(x)$ with bounded intervals $\left[a_{i}, b_{i}\right)$, such that $\int_{\mathbb{R}}\left|f(x)-f_{\varepsilon}(x)\right| d \lambda < \varepsilon$;

(b) an integrable continuous function $g_{\varepsilon}(x)$ with a bounded support, such that $\int_{\mathbb{R}}\left|f(x)-g_{\varepsilon}(x)\right| d \lambda < \varepsilon$.
