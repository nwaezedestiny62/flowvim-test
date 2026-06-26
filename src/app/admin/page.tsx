'use client';

import { useState, useEffect } from 'react';
import { 
  Save, Home, Layout, Users, BookOpen, ShoppingBag, 
  HelpCircle, Plus, Trash2, Eye 
} from 'lucide-react';

export default function AdminDashboard() {
  const [content, setContent] = useState<any>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('hero');

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setLoading(false);
      })
      .catch(() => {
        setContent({ 
          hero: {}, 
          solutionCards: [], 
          about: { valueCards: [] }, 
          testimonials: { items: [] }, 
          blogs: { items: [] },
          products: [],
          faq: { mainTitle: '', subtitle: '', items: [] }
        });
        setLoading(false);
      });
  }, []);

  const saveContent = async () => {
    const res = await fetch('/api/content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
    });

    if (res.ok) {
      setMessage('✅ Saved successfully! Changes are permanent.');
      setTimeout(() => setMessage(''), 4000);
    } else {
      setMessage('❌ Failed to save. Check console.');
    }
  };

  // Update Helpers
  const updateHero = (field: string, value: string) => {
    setContent((prev: any) => ({ ...prev, hero: { ...(prev.hero || {}), [field]: value } }));
  };

  const updateCard = (index: number, field: string, value: string) => {
    setContent((prev: any) => {
      const cards = [...(prev.solutionCards || [])];
      cards[index] = { ...cards[index], [field]: value };
      return { ...prev, solutionCards: cards };
    });
  };

  const updateAbout = (field: string, value: string) => {
    setContent((prev: any) => ({ ...prev, about: { ...(prev.about || {}), [field]: value } }));
  };

  const updateValueCard = (index: number, field: string, value: string) => {
    setContent((prev: any) => {
      const cards = [...(prev.about?.valueCards || [])];
      cards[index] = { ...cards[index], [field]: value };
      return { ...prev, about: { ...prev.about, valueCards: cards } };
    });
  };

  const updateTestimonial = (index: number, field: string, value: string) => {
    setContent((prev: any) => {
      const items = [...(prev.testimonials?.items || [])];
      items[index] = { ...items[index], [field]: value };
      return { ...prev, testimonials: { ...(prev.testimonials || {}), items } };
    });
  };

  const updateBlog = (index: number, field: string, value: string) => {
    setContent((prev: any) => {
      const items = [...(prev.blogs?.items || [])];
      items[index] = { ...items[index], [field]: value };
      return { ...prev, blogs: { ...(prev.blogs || {}), items } };
    });
  };

  const updateProduct = (index: number, field: string, value: any) => {
    setContent((prev: any) => {
      const items = [...(prev.products || [])];
      items[index] = { ...items[index], [field]: value };
      return { ...prev, products: items };
    });
  };

  const updateFaq = (index: number, field: string, value: string) => {
    setContent((prev: any) => {
      const items = [...(prev.faq?.items || [])];
      items[index] = { ...items[index], [field]: value };
      return { ...prev, faq: { ...(prev.faq || {}), items } };
    });
  };

  // Add & Remove Functions
  const addSolutionCard = () => {
    setContent((prev: any) => ({
      ...prev,
      solutionCards: [...(prev.solutionCards || []), { title: '', description: '' }]
    }));
  };

  const removeSolutionCard = (index: number) => {
    setContent((prev: any) => ({
      ...prev,
      solutionCards: (prev.solutionCards || []).filter((_: any, i: number) => i !== index)
    }));
  };

  const addValueCard = () => {
    setContent((prev: any) => ({
      ...prev,
      about: {
        ...(prev.about || {}),
        valueCards: [...(prev.about?.valueCards || []), { title: '', desc: '' }]
      }
    }));
  };

  const removeValueCard = (index: number) => {
    setContent((prev: any) => ({
      ...prev,
      about: {
        ...prev.about,
        valueCards: (prev.about?.valueCards || []).filter((_: any, i: number) => i !== index)
      }
    }));
  };

  const addTestimonial = () => {
    setContent((prev: any) => ({
      ...prev,
      testimonials: {
        ...(prev.testimonials || {}),
        items: [...(prev.testimonials?.items || []), { text: '', name: '', position: '' }]
      }
    }));
  };

  const removeTestimonial = (index: number) => {
    setContent((prev: any) => ({
      ...prev,
      testimonials: {
        ...prev.testimonials,
        items: (prev.testimonials?.items || []).filter((_: any, i: number) => i !== index)
      }
    }));
  };

  const addBlog = () => {
    setContent((prev: any) => ({
      ...prev,
      blogs: {
        ...(prev.blogs || {}),
        items: [...(prev.blogs?.items || []), {
          title: '', description: '', image: '', date: '', category: '',
          author: '', slug: '', fullContent: '', quote: '', quoteAuthor: ''
        }]
      }
    }));
  };

  const removeBlog = (index: number) => {
    setContent((prev: any) => ({
      ...prev,
      blogs: {
        ...prev.blogs,
        items: (prev.blogs?.items || []).filter((_: any, i: number) => i !== index)
      }
    }));
  };

  const addProduct = () => {
    setContent((prev: any) => ({
      ...prev,
      products: [...(prev.products || []), {
        title: '', description: '', image: '', images: [], price: '', category: '', slug: ''
      }]
    }));
  };

  const removeProduct = (index: number) => {
    setContent((prev: any) => ({
      ...prev,
      products: (prev.products || []).filter((_: any, i: number) => i !== index)
    }));
  };

  const addFaq = () => {
    setContent((prev: any) => ({
      ...prev,
      faq: {
        ...(prev.faq || {}),
        items: [...(prev.faq?.items || []), { question: '', answer: '' }]
      }
    }));
  };

  const removeFaq = (index: number) => {
    setContent((prev: any) => ({
      ...prev,
      faq: {
        ...prev.faq,
        items: (prev.faq?.items || []).filter((_: any, i: number) => i !== index)
      }
    }));
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-2xl font-medium text-gray-700">Loading Admin Dashboard...</p>
      </div>
    </div>
  );

  const tabs = [
    { id: 'hero', label: 'Hero', icon: Home },
    { id: 'solutions', label: 'Solutions', icon: Layout },
    { id: 'about', label: 'About', icon: Users },
    { id: 'testimonials', label: 'Testimonials', icon: Users },
    { id: 'blogs', label: 'Blog Posts', icon: BookOpen },
    { id: 'products', label: 'Shop Products', icon: ShoppingBag },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-72 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-prim text-2xl">F</span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">FlowVim</h1>
              <p className="text-xs text-gray-500 text-dark -mt-1">ADMIN PANEL</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700 font-medium shadow-sm' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200 mt-auto">
          <button
            onClick={saveContent}
            className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition shadow-sm"
          >
            <Save className="w-5 h-5" />
            SAVE ALL CHANGES
          </button>
          {message && (
            <p className="mt-4 text-center text-sm text-emerald-600 font-medium bg-emerald-50 py-3 rounded-xl">
              {message}
            </p>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 capitalize">
              {tabs.find(t => t.id === activeTab)?.label} Management
            </h2>
            <p className="text-gray-500">Real-time editing • All changes are permanent after saving</p>
          </div>
        </header>

        <div className="p-8 max-w-5xl mx-auto pb-20">
          {/* HERO */}
          {activeTab === 'hero' && (
            <div className="bg-white rounded-3xl p-10 shadow border border-gray-100">
              <h3 className="text-2xl text-prim font-semibold mb-8">Hero Section</h3>
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Main Title</label>
                  <textarea value={content.hero?.title || ''} onChange={(e) => updateHero('title', e.target.value)} rows={4} className="w-full border border-gray-200 focus:border-blue-500 p-5 rounded-2xl text-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Button Text</label>
                  <input value={content.hero?.buttonText || ''} onChange={(e) => updateHero('buttonText', e.target.value)} className="w-full border border-gray-200 focus:border-blue-500 p-5 rounded-2xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Quote / Subtitle</label>
                  <textarea value={content.hero?.quote || ''} onChange={(e) => updateHero('quote', e.target.value)} rows={4} className="w-full border border-gray-200 focus:border-blue-500 p-5 rounded-2xl" />
                </div>
              </div>
            </div>
          )}

          {/* SOLUTIONS */}
          {activeTab === 'solutions' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl text-prim font-semibold">Solution Cards</h3>
                <button onClick={addSolutionCard} className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 px-5 py-3 rounded-2xl text-sm font-medium">
                  <Plus className="w-4 h-4" /> Add Card
                </button>
              </div>
              {content.solutionCards?.map((card: any, index: number) => (
                <div key={index} className="bg-white rounded-3xl p-8 mb-8 border border-gray-100 shadow">
                  <div className="flex justify-between items-center mb-6">
                    <p className="font-semibold text-lg">Card {index + 1}</p>
                    <button onClick={() => removeSolutionCard(index)} className="text-red-500 hover:text-red-600">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <input value={card.title || ''} onChange={(e) => updateCard(index, 'title', e.target.value)} className="w-full border p-5 rounded-2xl mb-4" placeholder="Title" />
                  <textarea value={card.description || ''} onChange={(e) => updateCard(index, 'description', e.target.value)} rows={5} className="w-full border p-5 rounded-2xl" placeholder="Description" />
                </div>
              ))}
            </div>
          )}

          {/* ABOUT */}
          {activeTab === 'about' && (
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-10 shadow border border-gray-100">
                <h3 className="text-2xl text-prim font-semibold mb-6">About Story</h3>
                <textarea value={content.about?.storyTitle || ''} onChange={(e) => updateAbout('storyTitle', e.target.value)} rows={4} className="w-full border p-5 rounded-2xl" placeholder="Main Story Title" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl text-prim font-semibold">Value Cards</h3>
                  <button onClick={addValueCard} className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 px-5 py-3 rounded-2xl text-sm font-medium">
                    <Plus className="w-4 h-4" /> Add Value Card
                  </button>
                </div>
                {content.about?.valueCards?.map((card: any, index: number) => (
                  <div key={index} className="bg-white rounded-3xl p-8 mb-6 border border-gray-100 shadow">
                    <div className="flex justify-between mb-6">
                      <p className="font-semibold">Value Card {index + 1}</p>
                      <button onClick={() => removeValueCard(index)} className="text-red-500"><Trash2 className="w-5 h-5" /></button>
                    </div>
                    <input value={card.title || ''} onChange={(e) => updateValueCard(index, 'title', e.target.value)} className="w-full border p-5 rounded-2xl mb-4" placeholder="Title" />
                    <textarea value={card.desc || ''} onChange={(e) => updateValueCard(index, 'desc', e.target.value)} rows={4} className="w-full border p-5 rounded-2xl" placeholder="Description" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl text-prim font-semibold">Testimonials</h3>
                <button onClick={addTestimonial} className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 px-5 py-3 rounded-2xl text-sm font-medium">
                  <Plus className="w-4 h-4" /> Add Testimonial
                </button>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100">
                <label className="block text-sm font-medium text-gray-600 mb-2">Section Main Title</label>
                <input value={content.testimonials?.mainTitle || ''} onChange={(e) => setContent((prev: any) => ({ ...prev, testimonials: { ...(prev.testimonials || {}), mainTitle: e.target.value } }))} className="w-full border p-5 rounded-2xl" placeholder="Main Title" />
              </div>

              {content.testimonials?.items?.map((t: any, index: number) => (
                <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow">
                  <div className="flex justify-between mb-6">
                    <p className="font-semibold">Testimonial {index + 1}</p>
                    <button onClick={() => removeTestimonial(index)} className="text-red-500"><Trash2 className="w-5 h-5" /></button>
                  </div>
                  <textarea value={t.text || ''} onChange={(e) => updateTestimonial(index, 'text', e.target.value)} rows={6} className="w-full border p-5 rounded-2xl mb-6" placeholder="Testimonial Text" />
                  <div className="grid grid-cols-2 gap-4">
                    <input value={t.name || ''} onChange={(e) => updateTestimonial(index, 'name', e.target.value)} className="border p-5 rounded-2xl" placeholder="Name" />
                    <input value={t.position || ''} onChange={(e) => updateTestimonial(index, 'position', e.target.value)} className="border p-5 rounded-2xl" placeholder="Position" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* BLOGS */}
          {activeTab === 'blogs' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl text-prim font-semibold">Blog Posts</h3>
                <button onClick={addBlog} className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 px-5 py-3 rounded-2xl text-sm font-medium">
                  <Plus className="w-4 h-4" /> Add Blog Post
                </button>
              </div>
              {content.blogs?.items?.map((blog: any, index: number) => (
                <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow">
                  <div className="flex justify-between mb-6">
                    <p className="font-semibold">Blog Post {index + 1}</p>
                    <button onClick={() => removeBlog(index)} className="text-red-500"><Trash2 className="w-5 h-5" /></button>
                  </div>
                  <input value={blog.title || ''} onChange={(e) => updateBlog(index, 'title', e.target.value)} className="w-full border p-5 rounded-2xl mb-3" placeholder="Title" />
                  <textarea value={blog.description || ''} onChange={(e) => updateBlog(index, 'description', e.target.value)} rows={3} className="w-full border p-5 rounded-2xl mb-3" placeholder="Short Description" />
                  <input value={blog.image || ''} onChange={(e) => updateBlog(index, 'image', e.target.value)} className="w-full border p-5 rounded-2xl mb-3" placeholder="Image URL" />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <input value={blog.date || ''} onChange={(e) => updateBlog(index, 'date', e.target.value)} className="border p-5 rounded-2xl" placeholder="Date" />
                    <input value={blog.category || ''} onChange={(e) => updateBlog(index, 'category', e.target.value)} className="border p-5 rounded-2xl" placeholder="Category" />
                  </div>

                  <input value={blog.author || ''} onChange={(e) => updateBlog(index, 'author', e.target.value)} className="w-full border p-5 rounded-2xl mt-4" placeholder="Author" />
                  <input value={blog.slug || ''} onChange={(e) => updateBlog(index, 'slug', e.target.value)} className="w-full border p-5 rounded-2xl mt-4" placeholder="Slug" />

                  <textarea value={blog.fullContent || ''} onChange={(e) => updateBlog(index, 'fullContent', e.target.value)} rows={10} className="w-full border p-5 rounded-2xl mt-4" placeholder="Full Blog Content" />
                  <textarea value={blog.quote || ''} onChange={(e) => updateBlog(index, 'quote', e.target.value)} rows={3} className="w-full border p-5 rounded-2xl mt-4" placeholder="Quote (optional)" />
                  <input value={blog.quoteAuthor || ''} onChange={(e) => updateBlog(index, 'quoteAuthor', e.target.value)} className="w-full border p-5 rounded-2xl" placeholder="Quote Author" />
                </div>
              ))}
            </div>
          )}

          {/* PRODUCTS */}
          {activeTab === 'products' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl text-prim font-semibold">Shop Products</h3>
                <button onClick={addProduct} className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 px-5 py-3 rounded-2xl text-sm font-medium">
                  <Plus className="w-4 h-4" /> Add Product
                </button>
              </div>
              {content.products?.map((product: any, index: number) => (
                <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow">
                  <div className="flex justify-between mb-6">
                    <p className="font-semibold">Product {index + 1}</p>
                    <button onClick={() => removeProduct(index)} className="text-red-500"><Trash2 className="w-5 h-5" /></button>
                  </div>
                  <input value={product.title || ''} onChange={(e) => updateProduct(index, 'title', e.target.value)} className="w-full border p-5 rounded-2xl mb-3" placeholder="Title" />
                  <textarea value={product.description || ''} onChange={(e) => updateProduct(index, 'description', e.target.value)} rows={3} className="w-full border p-5 rounded-2xl mb-3" placeholder="Short Description" />
                  <input value={product.image || ''} onChange={(e) => updateProduct(index, 'image', e.target.value)} className="w-full border p-5 rounded-2xl mb-3" placeholder="Main Image URL" />

                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-3">Gallery Images (one URL per line)</label>
                    <textarea
                      value={product.images ? product.images.join('\n') : ''}
                      onChange={(e) => {
                        const imageList = e.target.value.split('\n').map(line => line.trim()).filter(line => line !== '');
                        setContent((prev: any) => {
                          const items = [...(prev.products || [])];
                          items[index] = { ...items[index], images: imageList };
                          return { ...prev, products: items };
                        });
                      }}
                      rows={5}
                      className="w-full border p-5 rounded-2xl font-mono text-sm"
                      placeholder="Paste one image URL per line"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <input value={product.price || ''} onChange={(e) => updateProduct(index, 'price', e.target.value)} className="border p-5 rounded-2xl" placeholder="Price (₦)" type="number" />
                    <input value={product.category || ''} onChange={(e) => updateProduct(index, 'category', e.target.value)} className="border p-5 rounded-2xl" placeholder="Category" />
                  </div>

                  <input value={product.slug || ''} onChange={(e) => updateProduct(index, 'slug', e.target.value)} className="w-full border p-5 rounded-2xl mt-4" placeholder="Slug" />
                </div>
              ))}
            </div>
          )}

          {/* FAQ */}
          {activeTab === 'faq' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl text-prim font-semibold">FAQ Section</h3>
                <button onClick={addFaq} className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 px-5 py-3 rounded-2xl text-sm font-medium">
                  <Plus className="w-4 h-4" /> Add FAQ
                </button>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100">
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-2">Main Title</label>
                  <input value={content.faq?.mainTitle || ''} onChange={(e) => setContent((prev: any) => ({ ...prev, faq: { ...(prev.faq || {}), mainTitle: e.target.value } }))} className="w-full border p-5 rounded-2xl" placeholder="Frequently Asked Questions" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subtitle</label>
                  <input value={content.faq?.subtitle || ''} onChange={(e) => setContent((prev: any) => ({ ...prev, faq: { ...(prev.faq || {}), subtitle: e.target.value } }))} className="w-full border p-5 rounded-2xl" placeholder="Still Have Questions?" />
                </div>
              </div>

              {content.faq?.items?.map((faq: any, index: number) => (
                <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow">
                  <div className="flex justify-between mb-6">
                    <p className="font-semibold">FAQ {index + 1}</p>
                    <button onClick={() => removeFaq(index)} className="text-red-500"><Trash2 className="w-5 h-5" /></button>
                  </div>
                  <input value={faq.question || ''} onChange={(e) => updateFaq(index, 'question', e.target.value)} className="w-full border p-5 rounded-2xl mb-4" placeholder="Question" />
                  <textarea value={faq.answer || ''} onChange={(e) => updateFaq(index, 'answer', e.target.value)} rows={5} className="w-full border p-5 rounded-2xl" placeholder="Answer" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}