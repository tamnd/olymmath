---
tag: TJHBYSFGVG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A set $M$ of natural numbers is called a *spectrum* if there is a first-order language $L$ and a sentence $\phi$ over $L$ such that:
$$M = \{ n \mid \phi \text{ has a model containing exactly $n$ elements}\}$$
For example, consider a sentence $\phi = \exists e . (\forall x. x = e)$ in a first order language with no relation symbol, no function symbol, and no constant symbol. The formula $\phi$ only admits a model containing exactly 1 element. Therefore, the set $\{1\}$ is a spectrum.\\
Show that:

- Every finite subset of $\mathbb{N} \setminus \{0\} $ is a spectrum [/*]

- The set of even numbers, i.e., $\{2k \mid k \in \mathbb{N}\}$ is a spectrum [/*]

- For any fixed $m \geq 1$, the set of numbers greater than $0$ that are divisible by $m$, i.e., $\{m\cdot k \mid k \in \mathbb{N}\}$ is a spectrum[/*]
