---
tag: XRTDGXASRF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer and let $a$ be an integer with $\text{gcd}(a, n) = 1$. Prove that
$$
\frac{a\varphi(n) - 1}{n} \equiv \sum_{\substack{j=1 \\ \text{gcd}(j,n)=1}}^{n} \frac{1}{aj} \left[ \frac{aj}{n} \right] \pmod{n},
$$
where $\varphi(n)$ is the Euler's totient function and $[x]$ is the greatest integer not exceeding $x$.
