---
tag: Z78BF9G8DN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267312
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
During the first week of the 2008-2009 school year at Jupiter Falls High School, the school holds a fire drill. The $2008$ students in attendance all leave the school and head for the football field. Wendy and several of her friends sit down in a circle on the ground and begin to chat.

Wendy and her friend Lilly sit side-by-side, and after a little while decide to swap spots in order to make it easier to talk with different friends. This leads Lilly's boyfriend Nori to offer up a problem, "Suppose we all stood up and took the space that one of our neighboors had been sitting in. In how many ways could we do that?"

"I think just four, " offers Wendy, oblivious that Nori is subtly voicing a complaint over Lilly's absence at his side. "We all either move one spot clockwise, or one spot counterclockwise. Unless we can sit on each other."

Nori replies, "Oh, right. That's not really what I meant. What I meant was that we can also stay in our own spot, like Beth, Regan, Tom, Burt, and I just did. So, in how many ways can that happen? Assume no two people wind up in the same spot."

Wendy pulls out a calculator and writes a program that cycles through all the possibilities. After a couple of minutes she announces, "There are $31$. $\textit{That's}$ a weird number."

"Can you solve it generally?" asks Lilly.

"Honestly, I'm not sure. I'd need to work on it a bit to know if I could," admits Wendy.

Nori adds more complexity to the problem, "How about this: Let $k$ be the number of students in a circle. Then let $m$ be the number of ways we can rearrange ourselves so that each of us is in the same spot or within one spot of where we started, and no two people are ever in the same spot. If $m$ leaves a remainder of $1$ when divided by $5$, how many possible values are there of $k$, where $k$ is at least $3$ and at most $2008$?"

Find the answer to Nori's problem.
