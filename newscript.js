// JavaScript for interactivity

document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('#main-header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const toolbarButtons = document.querySelectorAll(".toolbar-btn");
        const noteEditor = document.getElementById("note-editor");
        const saveNoteButton = document.getElementById("save-note");
        const notesList = document.getElementById("notes-list");
    
        document.addEventListener("DOMContentLoaded", () => {
            const toolbarButtons = document.querySelectorAll(".toolbar-btn");
            const noteEditor = document.getElementById("note-editor");
        
            // Add click event listeners to all toolbar buttons
            toolbarButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const command = button.getAttribute("data-command"); // Get the command (bold, italic, underline)
                    document.execCommand(command, false, null); // Apply the command to the selected text
                    noteEditor.focus(); // Refocus the editor after applying the style
                });
            });
        });
        
        
            // Make the text area editable
            textArea.contentEditable = true;
        });
        
        // Save notes with formatting
        saveNoteButton.addEventListener("click", () => {
            const noteContent = noteEditor.innerHTML.trim(); // Get formatted HTML content
            if (noteContent !== "") {
                const noteItem = document.createElement("li");
                noteItem.innerHTML = noteContent; // Preserve formatting
                notesList.appendChild(noteItem);
                noteEditor.innerHTML = ""; // Clear editor
            } else {
                alert("Please write something before saving!");
            }
        });
    });

    // Rich Text Editor Functionality
document.addEventListener("DOMContentLoaded", () => {
    const toolbarButtons = document.querySelectorAll(".toolbar-btn");
    const editor = document.getElementById("editor");

    toolbarButtons.forEach(button => {
        button.addEventListener("click", () => {
            const command = button.getAttribute("data-command");
            document.execCommand(command, false, null);
        });
    });
});
// used for saving notes and refreshing to again
document.addEventListener("DOMContentLoaded", () => {
    const noteEditor = document.getElementById("note-editor");
    const saveNoteButton = document.getElementById("save-note");
    const notesList = document.getElementById("notes-list");

    saveNoteButton.addEventListener("click", () => {
        const noteContent = noteEditor.textContent.trim(); // Get content from the editor
        if (noteContent) {
            // Create a new list item for the saved note
            const listItem = document.createElement("li");
            listItem.textContent = noteContent;
            notesList.appendChild(listItem); // Append the note to the list

            // Clear the note editor after saving
            noteEditor.textContent = "";
        } else {
            alert("Please write something before saving."); // Prevent saving empty notes
        }
    });
});

// refreshing text edior intials
document.addEventListener("DOMContentLoaded", () => {
    const richTextEditor = document.getElementById("editor");

    // Placeholder behavior
    richTextEditor.addEventListener("focus", () => {
        if (richTextEditor.textContent === "Start writing here...") {
            richTextEditor.textContent = ""; // Clear placeholder on focus
        }
    });

    richTextEditor.addEventListener("blur", () => {
        if (richTextEditor.textContent.trim() === "") {
            richTextEditor.textContent = "Start writing here..."; // Add placeholder back on blur
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const richTextEditor = document.getElementById("editor");
    const saveTextButton = document.getElementById("save-rich-text");

    // Add functionality for "Save Text" button
    saveTextButton.addEventListener("click", () => {
        const editorContent = richTextEditor.textContent.trim(); // Get the text content

        if (editorContent && editorContent !== "Start writing here...") {
            alert("Text saved successfully!"); // Simulate saving action
            window.location.reload(); // Refresh the page
        } else {
            alert("Please write something before saving."); // Notify if empty or placeholder text
        }
    });

    // Placeholder behavior for rich-text editor
    richTextEditor.addEventListener("focus", () => {
        if (richTextEditor.textContent === "Start writing here...") {
            richTextEditor.textContent = ""; // Clear placeholder on focus
        }
    });

    richTextEditor.addEventListener("blur", () => {
        if (richTextEditor.textContent.trim() === "") {
            richTextEditor.textContent = "Start writing here..."; // Add placeholder back on blur
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Elements for Analytics
    const totalNotesElement = document.getElementById("total-notes");
    const blogViewsElement = document.getElementById("blog-views");
    const getStartedClicksElement = document.getElementById("get-started-clicks");

    // Variables to track analytics data
    let totalNotes = 0;
    let blogViews = 0;
    let getStartedClicks = 0;

    // Increment Total Notes when a note is saved
    const saveNoteButton = document.getElementById("save-note");
    saveNoteButton.addEventListener("click", () => {
        const noteEditor = document.getElementById("note-editor");
        if (noteEditor.innerHTML.trim() == "") {
            totalNotes++;
            totalNotesElement.textContent = totalNotes;
        }
    });

    // Simulate Blog Views (e.g., user visits the blog section)
    const blogSection = document.getElementById("blogs");
    blogSection.addEventListener("mouseenter", () => {
        blogViews++;
        blogViewsElement.textContent = blogViews;
    });

    // Track clicks on the "Get Started" button
    const getStartedButton = document.getElementById("get-started");
    getStartedButton.addEventListener("click", () => {
        getStartedClicks++;
        getStartedClicksElement.textContent = getStartedClicks;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const formResponse = document.getElementById("form-response");

    // Handle form submission
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent actual form submission

        // Simulate form submission
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            formResponse.classList.remove("hidden");
            formResponse.textContent = `Thank you, ${name}! Your message has been sent successfully.`;

            // Clear the form fields
            contactForm.reset();

            // Optional: Hide the message after a few seconds
            setTimeout(() => {
                formResponse.classList.add("hidden");
                formResponse.textContent = "";
            }, 5000);
        } else {
            alert("Please fill out all fields!");
        }
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for header height
            behavior: 'smooth'
        });
    });
});

    // Dynamic Blog Content Loading
    const blogContainer = document.getElementById('blog-container');

    const blogs = [
        {
            title: "Exploring Rich Text Editors",
            snippet: "Discover the features of modern text editors and how they simplify content creation.",
            image: "https://contentstatic.timesjobs.com/thumb/msid-60764726,width-640,resizemode-4/Push-your-limits.jpg?522448",
        },
        {
            title: "The Art of Note-Taking",
            snippet: "Learn how effective note-taking can enhance productivity and creativity.",
            image: "https://paperlike.com/cdn/shop/articles/2000x1325_Blog_-_Note-Taking_-_Cover_27aecfdd-9e2b-4637-a43b-51657308aa7c.jpg?v=1623408687&width=500",
        },
        {
            title: "Understanding Blog Analytics",
            snippet: "Unlock the potential of analytics to grow your audience.",
            image: "https://www.techtarget.com/rms/onlineimages/what_is_a_blog_used_for-f_mobile.png",
        }
    ];

    blogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');

        blogCard.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}">
            <h3>${blog.title}</h3>
            <p>${blog.snippet}</p>
            <button class="read-more">Read More</button>
        `;

        blogContainer.appendChild(blogCard);
    });

    // Interactivity for "Read More" Buttons
    blogContainer.addEventListener('click', event => {
        if (event.target.classList.contains('read-more')) {
            alert('This feature will show the full blog content in future updates!');
        }
    });

    // Hero Section Button Animation
   // Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Hero Section Button Animation
    const getStartedButton = document.getElementById('get-started');

    // Check if the button exists to prevent errors
    if (getStartedButton) {
        getStartedButton.addEventListener('mouseover', () => {
            getStartedButton.style.backgroundColor = '#feb47b';
            getStartedButton.style.transform = 'scale(1.1)';
        });

        getStartedButton.addEventListener('mouseout', () => {
            getStartedButton.style.backgroundColor = '#222';
            getStartedButton.style.transform = 'scale(1)';
        });
    } else {
        console.error('Button with id "get-started" not found.');
    }
});


