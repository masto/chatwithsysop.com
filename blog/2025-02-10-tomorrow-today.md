---
title: "Note To Self #2501"
authors: [masto]
---

A reading from the book of true things we all know but need to be reminded of
sometimes:

**Don't spend a lot of time on a decision that can be easily changed.**

I found myself overthinking an architectural question: if services A and B each
need a Q, is it better to spin up a multi-tenant Q server as a shared component
given that it's more resource-efficient and I have a lot of experiencing
managing Q; or do I create composed AQ and BQ services at a slightly higher
resource cost but with simplified routing, no shared state, and the ability to
manage their versions independently.

The reality is that either one of these patterns can be converted to the other
with very little effort, especially if I'm aware that I might want to do so when
I set it up. The even harsher reality is that A doesn't exist yet and B is
purely hypothetical, conjured into existence by the ever-present urge to try to
solve tomorrow's problem today.
