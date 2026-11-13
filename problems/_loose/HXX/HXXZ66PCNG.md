---
tag: HXXZ66PCNG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233701
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Euclidean Algorithm on inputs $a$ and $b$ is a way to find the greatest common divisor $\gcd(a,b)$. Suppose WLOG that $a>b$. On each step of the Euclidan Algorithm, we solve the equation $a=bq+r$ for integers $q,r$ such that $0\leq r<b$, and repeat on $b$ and $r$. Thus $\gcd(a,b)=\gcd(b,r)$, and we repeat. If $r=0$, we are done. For example, $\gcd(100,15)=\gcd(15,10)=\gcd(10,5)=5$, because $100=15\cdot6+10$, $15=10\cdot1+5$, and $10=5\cdot2+0$. Thus, the Euclidean Algorithm here takes $3$ steps. What is the largest number of steps that the Euclidean Algorithm can take on some integer inputs $a,b$ where $0<a,b<10^{2016}$?
