---
tag: Q18QM4BVVM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30586
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the Newton-Leibniz formula. If the function $ f(x) $ is continuous on the interval $[a, b]$, then

$$
\int_{a}^{b} f(x) d x = \left. F(x) \right|_{a}^{b} = F(b) - F(a),
$$

where $ F(x) $ is the antiderivative of $ f(x) $, i.e., $ F'(x) = f(x) $. 1242. Compute the integrals:
1) $\int_{0}^{8} (\sqrt{2 x} + \sqrt[3]{x}) d x$
2) $\int_{0}^{1} \sqrt{1 + t} d t$
3) $\int_{2}^{3} \frac{d x}{\sqrt{5 + 4 x - x^{2}}}$
4) $\int_{\frac{\pi}{6}}^{\frac{\pi}{4}} \sec^{2} \alpha d \alpha$
