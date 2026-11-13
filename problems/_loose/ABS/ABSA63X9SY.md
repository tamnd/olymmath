---
tag: ABSA63X9SY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108269
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a football invitational tournament, a total of $n$ teams are scheduled to participate, with each team's scheduled number of matches being $m_{1}, m_{2}, \cdots, m_{n}$. If any two teams are scheduled to play at most one match against each other, then $\left(m_{1}, m_{2}, \cdots, m_{n}\right)$ is called a "valid arrangement". Prove: If $\left(m_{1}, m_{2}, \cdots, m_{n}\right)$ is a valid arrangement, and $m_{1} \geqslant m_{2} \geqslant \cdots \geqslant m_{n}$, then one team can be removed, and the match-ups between the remaining teams can be readjusted, such that $\left(m_{2}-1, m_{3}-1, \cdots, m_{m_{1}+1}-1, m_{m_{1}+2}, \cdots, m_{n}\right)$ is also a valid arrangement.
