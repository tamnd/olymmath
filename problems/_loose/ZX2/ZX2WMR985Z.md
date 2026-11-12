---
tag: ZX2WMR985Z
kind: problem
type: answer
answer: \widehat{N}=[\frac{Mn}{}]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33477
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ be the size of some population that needs to be estimated with "minimal means" without simply counting all elements of this set. This kind of question is of interest, for example, when estimating the number of residents in a particular country, city, etc.

In 1786, Laplace proposed the following method to estimate the number $N$ of residents in France.

Select a certain number, say $M$, of elements from the population and mark them. Then return them to the main set and assume that they are "well mixed" with the unmarked elements. After that, take $n$ elements from the "mixed" population. Let $X$ be the number of marked elements (in this sample of $n$ elements).

(a) Show that the probability $\mathrm{P}_{N, M ; n}\{X=m\}$ that $X=m$ (for fixed $N, M$, and $n$) is given by the formula of the hypergeometric distribution:

$$
\mathrm{P}_{N, M ; n}\{X=m\}=\frac{C_{M}^{m} C_{N-M}^{n-m}}{C_{N}^{n}}
$$

(b) Assuming $M, n$, and $m$ are given, find the maximum of $\mathrm{P}_{N, M ; n}\{X=m\}$ over $N$, i.e., the "most likely" size of the entire population that leads to the number of marked elements being equal to $m$.

Show that the most likely value $\widehat{N}$ (called the maximum likelihood estimate) is given by the formula

$$
\widehat{N}=\left[\frac{M n}{m}\right]
$$

where $[\cdot]$ denotes the integer part.
