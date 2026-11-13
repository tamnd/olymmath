---
tag: PH3XNQW4QH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0002.parquet#row=33
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt
    source: hf-mathnet
    label: United States Harvard-MIT Mathematics Tournament
---
A cell of a 2-configuration of a set $A$ is a nonempty subset $C$ of $A$ such that
i. for any two distinct elements $a, b$ of $C$, there exists a sequence $c_{0}, c_{1}, \ldots, c_{n}$ of elements of $A$ with $c_{0}=a, c_{n}=b$, and such that $\left\{c_{0}, c_{1}\right\},\left\{c_{1}, c_{2}\right\}, \ldots,\left\{c_{n-1}, c_{n}\right\}$ are all elements of the 2-configuration, and
ii. if $a$ is an element of $C$ and $b$ is an element of $A$ but not of $C$, there does NOT exist a sequence $c_{0}, c_{1}, \ldots, c_{n}$ of elements of $A$ with $c_{0}=a, c_{n}=b$, and such that $\left\{c_{0}, c_{1}\right\},\left\{c_{1}, c_{2}\right\}, \ldots,\left\{c_{n-1}, c_{n}\right\}$ are all elements of the 2-configuration.
Also, we define a 2-configuration of $A$ to be barren if there is no subset $\left\{a_{0}, a_{1}, \ldots, a_{n}\right\}$ of $A$, with $n \geq 2$, such that $\left\{a_{0}, a_{1}\right\},\left\{a_{1}, a_{2}\right\}, \ldots,\left\{a_{n-1}, a_{n}\right\}$ and $\left\{a_{n}, a_{0}\right\}$ are all elements of the 2-configuration.
Show that, given any 2-configuration of a set $A$, every element of $A$ belongs to exactly one cell.
