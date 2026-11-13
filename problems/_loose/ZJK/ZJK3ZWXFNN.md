---
tag: ZJK3ZWXFNN
kind: problem
type: answer
answer: \ln 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247540
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ a\in (1,\infty) $ and a countinuous function $ f:[0,\infty)\longrightarrow\mathbb{R} $ having the property:
$$ \lim_{x\to \infty} xf(x)\in\mathbb{R} . $$

**a)** Show that the integral $ \int_1^{\infty} \frac{f(x)}{x}dx $ and the limit $ \lim_{t\to\infty} t\int_{1}^a f\left( x^t \right) dx $ both exist, are finite and equal.

**b)** Calculate $ \lim_{t\to \infty} t\int_1^a \frac{dx}{1+x^t} . $
