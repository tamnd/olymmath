---
tag: CX5G0PCZTF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=193949
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In this problem, you may choose to consider angles in either degrees or in radians.

(a) Determine an angle $x$ for which $\sin \left(\frac{x}{5}\right)=\sin \left(\frac{x}{9}\right)=1$.

(b) There are sequences of 100 distinct positive integers $n_{1}, n_{2}, \ldots, n_{100}$ with the property that, for all integers $i$ and $j$ with $1 \leq i<j \leq 100$ and for all angles $x$, we have $\sin \left(\frac{x}{n_{i}}\right)+\sin \left(\frac{x}{n_{j}}\right) \neq 2$. Determine such a sequence $n_{1}, n_{2}, \ldots, n_{100}$ and prove that it has this property.

(c) Suppose that $m_{1}, m_{2}, \ldots, m_{100}$ is a list of 100 distinct positive integers with the property that, for each integer $i=1,2, \ldots, 99$, there is an angle $x_{i}$ with $\sin \left(\frac{x_{i}}{m_{i}}\right)+\sin \left(\frac{x_{i}}{m_{i+1}}\right)=2$. Prove that, for every such sequence $m_{1}, m_{2}, \ldots, m_{100}$ with $m_{1}=6$, there exists an angle $t$ for which

$$
\sin \left(\frac{t}{m_{1}}\right)+\sin \left(\frac{t}{m_{2}}\right)+\cdots+\sin \left(\frac{t}{m_{100}}\right)=100
$$

(The sum on the left side consists of 100 terms.)
