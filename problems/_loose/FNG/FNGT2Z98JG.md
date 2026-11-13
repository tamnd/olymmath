---
tag: FNGT2Z98JG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243326
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ k$ be an integer, $ k \geq 2$, and let $ p_{1},\ p_{2},\ \ldots,\ p_{k}$ be positive reals with $ p_{1} + p_{2} + \ldots + p_{k} = 1$. Suppose we have a collection $ \left(A_{1,1},\ A_{1,2},\ \ldots,\ A_{1,k}\right)$, $ \left(A_{2,1},\ A_{2,2},\ \ldots,\ A_{2,k}\right)$, $ \ldots$, $ \left(A_{m,1},\ A_{1,2},\ \ldots,\ A_{m,k}\right)$ of $ k$-tuples of finite sets satisfying the following two properties:
(i) for every $ i$ and every $ j \neq j^{\prime}$, $ A_{i,j}\cap A_{i,j^{\prime}} = \emptyset$, and
(ii) for every $ i\neq i^{\prime}$ there exist $ j\neq j^{\prime}$ for which $ A_{i,j} \cap A_{i^{\prime},j^{\prime}}\neq\emptyset$. Prove that
$$ \sum_{b = 1}^{m}{\prod_{a = 1}^{k}{p_{a}^{|A_{b,a}|}}} \leq 1.
$$
