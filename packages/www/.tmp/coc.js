/** @jsxRuntime classic */
/** @jsx mdx */
/** @jsxFrag mdx.Fragment */
import { mdx } from '@mdx-js/preact';
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("p", null, "If you see a Code of Conduct violation, follow these steps:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Let the person know that what they did is not appropriate and ask them to stop and/or edit their message(s)."), mdx("li", {
        parentName: "ul"
    }, "That person should immediately stop the behavior and correct the issue."), mdx("li", {
        parentName: "ul"
    }, "If this doesn’t happen, or if you’re uncomfortable speaking up, contact admins by emailing ", mdx("a", {
        href: "mailto:mods@partycorgi.com",
        parentName: "li"
    }, "mods@partycorgi.com"), "."), mdx("li", {
        parentName: "ul"
    }, "As soon as available, an admin will join, identify themselves, and take further action (see below), starting with a warning, then temporary deactivation, then long-term deactivation."), mdx("li", {
        parentName: "ul"
    }, "When reporting, please include any relevant details, links, screenshots, context, or other information that may be used to better understand and resolve the situation."), mdx("li", {
        parentName: "ul"
    }, "The Admin team will prioritize the well-being and comfort of those affected negatively by the violation over the comfort of the violator.")), mdx("h2", {
        id: "our-goal"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#our-goal",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Our Goal"), mdx("p", null, "This community is dedicated to providing a harassment-free experience for everyone. We do not tolerate harassment of participants in any form."), mdx("h2", {
        id: "applicability-and-scope"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#applicability-and-scope",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Applicability and Scope"), mdx("p", null, "This code of conduct applies to all of this community's spaces, including public channels, private channels and direct messages, both online and off. Anyone who violates this code of conduct may be sanctioned or expelled from these spaces at the discretion of the administrators."), mdx("h2", {
        id: "toward-a-welcoming-and-safe-environment"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#toward-a-welcoming-and-safe-environment",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Toward a Welcoming and Safe Environment"), mdx("p", null, "We hope to create an environment in which diverse individuals can collaborate and interact in a positive and affirming way. Examples of behavior that contributes to creating this sort of environment include:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Using welcoming and inclusive language"), mdx("li", {
        parentName: "ul"
    }, "Being respectful of differing viewpoints and experiences"), mdx("li", {
        parentName: "ul"
    }, "Gracefully accepting constructive criticism"), mdx("li", {
        parentName: "ul"
    }, "Focusing on what is best for the overall community"), mdx("li", {
        parentName: "ul"
    }, "Showing empathy towards other community members")), mdx("h2", {
        id: "anti-harassment-statement"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#anti-harassment-statement",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Anti-Harassment Statement"), mdx("p", null, "This community will not tolerate harassment of any kind. Examples of harassment include:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Offensive comments related to gender, gender identity and expression, sexual orientation, disability, mental illness, neuro(a)typicality, physical appearance, pregnancy status, veteran status, political affiliation, marital status, body size, age, race, national origin, ethnic origin, nationality, immigration status, language, religion or lack thereof, or other identity marker. This includes anti-Indigenous/Nativeness and anti-Blackness."), mdx("li", {
        parentName: "ul"
    }, "Unwelcome comments regarding a person's lifestyle choices and practices, including those related to food, health, parenting, relationships, drugs, and employment."), mdx("li", {
        parentName: "ul"
    }, "Deliberate misgendering, using inappropriate pronouns, or use of \"dead\" or rejected names."), mdx("li", {
        parentName: "ul"
    }, "Gratuitous or off-topic sexual images or behavior in spaces where they're not appropriate."), mdx("li", {
        parentName: "ul"
    }, "Physical contact and simulated physical contact (eg, textual descriptions like \"hug\" or \"backrub\") without consent or after a request to stop."), mdx("li", {
        parentName: "ul"
    }, "Threats of violence."), mdx("li", {
        parentName: "ul"
    }, "Incitement of violence towards any individual or group, including encouraging a person to commit suicide or to engage in self-harm."), mdx("li", {
        parentName: "ul"
    }, "Deliberate intimidation."), mdx("li", {
        parentName: "ul"
    }, "Stalking or following - online or in the physical world."), mdx("li", {
        parentName: "ul"
    }, "Harassing photography or recording, including logging online activity for harassment purposes."), mdx("li", {
        parentName: "ul"
    }, "Sustained disruption of discussion."), mdx("li", {
        parentName: "ul"
    }, "Unwelcome sexual attention."), mdx("li", {
        parentName: "ul"
    }, "Patterns of inappropriate social contact, such as requesting/assuming inappropriate levels of intimacy with others."), mdx("li", {
        parentName: "ul"
    }, "Continued one-on-one communication after requests to cease."), mdx("li", {
        parentName: "ul"
    }, "Deliberate \"outing\" of any aspect of a person's identity without their consent except as necessary to protect vulnerable people from intentional abuse."), mdx("li", {
        parentName: "ul"
    }, "Publication of non-harassing private communication."), mdx("li", {
        parentName: "ul"
    }, "Jokes that resemble the above, such as \"hipster racism\", still count as harassment even if meant satirically or ironically.")), mdx("p", null, "If you have questions or concerns about these issues please feel free to message an admin or ask for an opportunity to explore the issue with a moderator and volunteers."), mdx("h2", {
        id: "reporting"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#reporting",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Reporting"), mdx("p", null, "If you are being harassed by a member of our community, notice that someone else is being harassed, or have any other concerns, please contact the administrators via ", mdx("a", {
        href: "mailto:mods@partycorgi.com",
        parentName: "p"
    }, "mods@partycorgi.com"), ". If the person who is harassing you is on the admin team, they will not be involved in handling or resolving the incident."), mdx("p", null, "The admin team will respond to any complaint as promptly as possible we can. If you do not get a timely response (for example, if no admins are currently online) then please put your personal safety and well-being first, and consider logging out and/or contacting the admins by email at ", mdx("a", {
        href: "mailto:mods@partycorgi.com",
        parentName: "p"
    }, "mods@partycorgi.com"), "."), mdx("p", null, "This code of conduct applies to our community's spaces, but if you are being harassed by a member of our community outside our spaces, we still want to know about it. We will take all good-faith reports of harassment by our members, especially the administrators, seriously. This includes harassment outside our spaces and harassment that took place at any point in time. The abuse team reserves the right to exclude people from the community based on their past behavior, including behavior outside of our spaces and behavior towards people who are not in this community."), mdx("p", null, "In order to protect volunteers from abuse and burnout, we reserve the right to reject any report we believe to have been made in bad faith. Reports intended to silence legitimate criticism may be deleted without response."), mdx("h2", {
        id: "enforcement-process"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#enforcement-process",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Enforcement Process"), mdx("p", null, "Every code of conduct violation report will be treated with seriousness and care. If a member's immediate safety and security is threatened, an individual admin may take any action that they deem appropriate, up to and including temporarily banning the offender from the community. In less urgent situations, at least two admins will discuss the offense and mutually arrive at a suitable response, which will be shared with the offender privately. Whatever the resolution that they decide upon, the decision of the admins involved in a violation case will be considered final."), mdx("p", null, "We will respect confidentiality requests for the purpose of protecting victims of abuse. At our discretion, we may publicly name a person about whom we've received harassment complaints, or privately warn third parties about them, if we believe that doing so will increase the safety of our members or the general public. We will not name harassment victims without their affirmative consent."), mdx("p", null, "Party Corgi prioritizes marginalized people’s safety over privileged people’s comfort. The administrators will not act on complaints regarding:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "“Reverse”-isms, including “reverse racism,” “reverse sexism,” and “cisphobia”"), mdx("li", {
        parentName: "ul"
    }, "Reasonable communication of boundaries, such as “leave me alone,” “go away,” or “I’m not discussing this with you.”"), mdx("li", {
        parentName: "ul"
    }, "Communicating in a “tone” you don’t find congenial"), mdx("li", {
        parentName: "ul"
    }, "Criticizing racist, sexist, cissexist, or otherwise oppressive behavior or assumptions"), mdx("li", {
        parentName: "ul"
    }, "The examples listed above are not against the Code of Conduct.")), mdx("h2", {
        id: "consequences"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#consequences",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Consequences"), mdx("p", null, "Participants asked to stop any harassing behavior are expected to comply immediately. If a participant engages in harassing behavior, the administrators may take any action they deem appropriate, up to and including expulsion from the community and identification of the participant as a harasser to other members. At the discretion of the admins, or by request, one or more of the parties involved may request to discuss the violation and how to avoid similar situations in the future."), mdx("h2", {
        id: "acknowledgements"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#acknowledgements",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Acknowledgements"), mdx("p", null, "This Code of Conduct is adapted from the Community Covenant (http://community-covenant.net), version 1.0, available at http://community-covenant.net/version/1/0/. The Community Covenant is an open source effort and is built on codes of conduct that came before it, including the Contributor Covenant (http://contributor-covenant.org/) and the LGBTQ in Tech community code of conduct (http://lgbtq.technology/coc.html)."), mdx("p", null, "This CoC also includes material adapted from the LGBTQ in Tech community code of conduct (http://lgbtq.technology/coc.html) beyond what the community covenant includes."), mdx("p", null, "License"), mdx("p", null, "Community Covenant by Coraline Ada Ehmke is licensed under a Creative Commons Attribution 4.0 International License (http://creativecommons.org/licenses/by/4.0/). Based on a work at http://community-covenant.net/."));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
