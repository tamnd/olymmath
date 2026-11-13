---
tag: 1TG42WTCF0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229448
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Set $p\ge 5$ be a prime number and $n$ be a natural number. Let $f$ be a function $ f: \mathbb{Z_{ \neq }}_0 \rightarrow \mathbb{ N }_0 $ satisfy the following conditions:

i) For all sequences of integers satisfy $ a_i \not\in \{0, 1\} $, and $ p $ $\not |$ $ a_i-1 $, $ \forall $ $ 1 \le i \le p-2 $,\\ $$ \sum^{p-2}_{i=1}f(a_i)=f(a_1a_2 \cdots a_{p-2}) $$

ii) For all coprime integers $ a $ and $ b $, $ a \equiv b \pmod p \Rightarrow f(a)=f(b) $

iii) There exist $k \in \mathbb{Z}_{\neq 0} $ that satisfy $ f(k)=n $

Prove that the number of such functions is $ d(n) $, where $ d(n) $ denotes the number of divisors of $ n $.
