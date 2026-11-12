---
tag: QYHC3HTEAP
kind: problem
type: answer
answer: \frac{3367}{5050}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2585
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will factorize the differences of cubes in the numerator and the sums of cubes in the denominator:

$$
A=\frac{(2-1)\left(2^{2}+2+1\right)}{(2+1)\left(2^{2}-2+1\right)} \cdot \frac{(3-1)\left(3^{2}+3+1\right)}{(3+1)\left(3^{2}-3+1\right)} \cdot \cdots \cdot \frac{(99-1)\left(99^{2}+99+1\right)}{(99+1)\left(99^{2}-99+1\right)} \cdot \frac{(100-1)\left(100^{2}+100+1\right)}{(100+1)\left(100^{2}-100+1\right)}
$$

Then we get

$$
A=\frac{1 \cdot 2 \cdot \ldots \cdot 99}{3 \cdot 4 \cdot \ldots \cdot 101} \frac{\left(2^{2}+2+1\right)}{\left(2^{2}-2+1\right)} \cdot \frac{\left(3^{2}+3+1\right)}{\left(3^{2}-3+1\right)} \cdot \ldots \cdot \frac{\left(99^{2}+99+1\right)}{\left(99^{2}-99+1\right)} \cdot \frac{\left(100^{2}+100+1\right)}{\left(100^{2}-100+1\right)}
$$

Since for any natural number $n(n>1)$, the equality $(n-1)^{2}+(n-1)+1=n^{2}-n+1$ holds, the factors in the numerator and denominator cancel out. Thus, we get

$$
A=\frac{1 \cdot 2}{100 \cdot 101} \cdot \frac{100^{2}+100+1}{2^{2}-2+1}=\frac{2\left(100^{2}+100+1\right)}{3 \cdot 100 \cdot 101}=\frac{10101}{50 \cdot 303}=\frac{3367}{5050}
$$
