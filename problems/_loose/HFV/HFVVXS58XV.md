---
tag: HFVVXS58XV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h371927
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44066
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240339
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2000
    source: hf-ai-mo-aops
    label: 2000 Iran MO (2nd round)
---
*Super number* is a sequence of numbers $0,1,2,\ldots,9$ such that it has infinitely many digits at left. For example $\ldots 3030304$ is a *super number*. Note that all of positive integers are *super numbers*, which have zeros before they're original digits (for example we can represent the number $4$ as $\ldots, 00004$ ). Like positive integers, we can add up and multiply *super numbers*. For example:
$$ \begin{array}{cc}& \ \ \ \ldots 3030304 &+ \ldots4571378 &\overline{ } & \ \ \ \ldots 7601682 \end{array} $$

And

$$ \begin{array}{cl}& \ \ \ \ldots 3030304 &\times \ldots4571378 &\overline{ } & \ \ \ \ldots 4242432 & \ \ \ \ldots 212128 & \ \ \ \ldots 90912 & \ \ \ \ldots 0304 & \ \ \ \ldots 128 & \ \ \ \ldots 20 & \ \ \ \ldots 6 &\overline{ } & \ \ \ \ldots 5038912 \end{array}$$**a)** Suppose that $A$ is a *super number*. Prove that there exists a *super number* $B$ such that $A+B=\stackrel{\leftarrow}{0}$ (Note: $\stackrel{\leftarrow}{0}$ means a super number that all of its digits are zero).**b)** Find all *super numbers* $A$ for which there exists a *super number* $B$ such that $A \times B=\stackrel{\leftarrow}{0}1$ (Note: $\stackrel{\leftarrow}{0}1$ means the super number $\ldots 00001$ ).**c)** Is this true that if $A \times B= \stackrel{\leftarrow}{0}$ , then $A=\stackrel{\leftarrow}{0}$ or $B=\stackrel{\leftarrow}{0}$ ? Justify your answer.
