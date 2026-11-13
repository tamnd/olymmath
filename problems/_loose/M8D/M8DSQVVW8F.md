---
tag: M8DSQVVW8F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1164301
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78561
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Ryan is learning number theory. He reads about the *Möbius function* $\mu : \mathbb N \to \mathbb Z$ , defined by $\mu(1)=1$ and
$$ \mu(n) = -\sum_{\substack{d\mid n d \neq n}} \mu(d) $$
for $n>1$ (here $\mathbb N$ is the set of positive integers).
However, Ryan doesn't like negative numbers, so he invents his own function: the *dubious function* $\delta : \mathbb N \to \mathbb N$ , defined by the relations $\delta(1)=1$ and
$$ \delta(n) = \sum_{\substack{d\mid n d \neq n}} \delta(d) $$
for $n > 1$ . Help Ryan determine the value of $1000p+q$ , where $p,q$ are relatively prime positive integers satisfying
$$ \frac{p}{q}=\sum_{k=0}^{\infty} \frac{\delta(15^k)}{15^k}. $$

*Proposed by Michael Kural*
