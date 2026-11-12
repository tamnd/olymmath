---
tag: S7HXN1XBYQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3537983
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35747
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2001
    source: hf-ai-mo-aops
    label: 2001 China Team Selection Test
---
Let $ \varphi $ be the Euler's totient function.

1. For any given integer $ a > 1 $, does there exist $ l \in \mathbb{N}_+ $ such that for any $ k \in \mathbb{N}_+ $, $ l \mid k $ and $ a^2 \nmid l $, $ \frac{\varphi(k)}{\varphi(l)} $ is a non-negative power of $ a $?
2. For integer $ x > a $, are there integers $ k_1 $ and $ k_2 $ satisfying:
$$
\varphi(k_i) \in \left ( \frac{x}{a} ,x \right ], i = 1,2; \varphi(k_1) \neq \varphi(k_2).
$$
And these two different $ k_i $ correspond to the same $ l_1 $ and $ l_2 $ as described in (1), yet $ \varphi(l_1) = \varphi(l_2) $.
3. Define $ \#E $ as the number of elements in set $ E $. For integer $ x > a $, let $ V(x) = \#\{v \in \mathbb{N}_+ \mid v = \varphi(k) \leq x\} $ and $ W(x) = \#\{w \in \mathbb{N}_+ \mid w = \varphi(l) \leq x, a^2 \mid l\} $. Compare $ V\left( \frac{x}{a} \right) $ with $ W(x) $.
