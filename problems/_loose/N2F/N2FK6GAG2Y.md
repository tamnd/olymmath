---
tag: N2FK6GAG2Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252873
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
One day, before his work time at Jane Street, Sunny decided to have some fun. He saw that there are some real numbers $a_{-1},\ldots,a_{-k}$ on a blackboard, so he decided to do the following process just for fun: if there are real numbers $a_{-k},\ldots,a_{n-1}$ on the blackboard, then he computes the polynomial
$$P_n(t)=(1-a_{-k}t)\cdots(1-a_{n-1}t).$$
He then writes a real number $a_n$, where
$$a_n=\frac{iP_n(i)-iP_n(-i)}{P_n(i)+P_n(-i)}.$$
If $a_n$ is undefined (that is, $P_n(i)+P_n(-i)=0$), then he would stop and go to work. Show that if Sunny writes some real number on the blackboard twice (or equivalently, there exists $m>n\ge0$ such that $am=an$), then the process never stops. Moreover, show that in this case, all the numbers Sunny writes afterwards will already be written before.
(usjl)
