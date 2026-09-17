import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import {
    Inbox,
    Package,
    LayoutTemplate,
    Image as ImageIcon,
    Sparkles,
    PhoneCall,
    Trash2,
    ExternalLink,
    Eye,
    EyeOff,
    Plus,
    Save,
} from "lucide-react";

export default function Dashboard({
    auth,
    inquiries = [],
    products = [],
    settings = {},
    stats = {},
}) {
    const [activeSection, setActiveSection] = useState("leads");
    const [showAddProductModal, setShowAddProductModal] = useState(false);

    // ১. হেডার ফর্ম
    const headerForm = useForm({
        brand_name: settings.brand_name || "Pure Sip",
        header_phone: settings.header_phone || "01306-312372",
        logo_type: "url",
        logo_url: settings.logo || "",
        logo_file: null,
    });

    // ২. ব্যানার ফর্ম (শুধু ইমেজ)
    const bannerForm = useForm({
        banner_type: "url",
        banner_url: settings.banner_image || "",
        banner_file: null,
    });

    // ৩. ব্যানারের নিচের কার্ডস ফর্ম (Image + Hover Text)
    const [cards, setCards] = useState(
        settings.showcase_cards || [
            { image: "/images/hozmi-cola.jpeg", title: "Card 1", hover_text: "Details 1" },
            { image: "/images/pudina-drink.jpeg", title: "Card 2", hover_text: "Details 2" },
            { image: "/images/tetul-drinks.jpg", title: "Card 3", hover_text: "Details 3" },
        ]
    );

    // ৪. কন্টাক্ট ও ফুটার ফর্ম
    const contactForm = useForm({
        phone_primary: settings.phone_primary || "01306-312372",
        phone_secondary: settings.phone_secondary || "018265-813373",
        whatsapp_number: settings.whatsapp_number || "+8801306312372",
        email: settings.email || "info@puresipbeverage.com",
        address: settings.address || "Pure Sip Beverage, Dhaka, Bangladesh",
    });

    // ৫. নতুন প্রোডাক্ট ফর্ম
    const productForm = useForm({
        name: "",
        tagline: "",
        price: "Tk 10",
        net_volume: "200ml",
        category: "refreshing",
        short_description: "",
        image_type: "url",
        image_url: "",
        image_file: null,
    });

    // সাবমিট হ্যান্ডলারসমূহ
    const submitHeader = (e) => {
        e.preventDefault();
        headerForm.post("/admin/settings", {
            preserveScroll: true,
            forceFormData: true,
            onSuccess: () => alert("Header & Logo updated successfully!"),
        });
    };

    const submitBanner = (e) => {
        e.preventDefault();
        bannerForm.post("/admin/settings", {
            preserveScroll: true,
            forceFormData: true,
            onSuccess: () => alert("Hero Banner updated successfully!"),
        });
    };

    const submitCards = (e) => {
        e.preventDefault();
        router.post("/admin/settings", { showcase_cards: cards }, {
            preserveScroll: true,
            onSuccess: () => alert("Feature Cards updated successfully!"),
        });
    };

    const submitContact = (e) => {
        e.preventDefault();
        contactForm.post("/admin/settings", {
            preserveScroll: true,
            onSuccess: () => alert("Contact lines updated successfully!"),
        });
    };

    const submitNewProduct = (e) => {
        e.preventDefault();
        productForm.post("/admin/products", {
            preserveScroll: true,
            forceFormData: true,
            onSuccess: () => {
                setShowAddProductModal(false);
                productForm.reset();
                alert("New drink added successfully!");
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-black text-[#112318] tracking-tight">
                            Pure Sip CMS Control Hub
                        </h2>
                        <p className="text-xs text-gray-500">
                            Easily update any website section live.
                        </p>
                    </div>
                    <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#183928] bg-emerald-100/60 px-4 py-2 rounded-xl hover:bg-emerald-200 transition-all"
                    >
                        <span>View Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                </div>
            }
        >
            <Head title="Admin CMS | Pure Sip" />

            <div className="py-8 bg-[#f4faf4] min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        {/* ================= বামপাশের সাইডবার ================= */}
                        <div className="lg:col-span-3 bg-white rounded-3xl p-4 shadow-sm border border-emerald-900/5 space-y-1">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider px-3 py-2 block">
                                Manage Sections
                            </span>

                            <button
                                onClick={() => setActiveSection("leads")}
                                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                                    activeSection === "leads"
                                        ? "bg-[#183928] text-white shadow-sm"
                                        : "text-gray-600 hover:bg-emerald-50 hover:text-[#183928]"
                                }`}
                            >
                                <div className="flex items-center gap-2.5">
                                    <Inbox className="w-4 h-4" />
                                    <span>Customer Leads</span>
                                </div>
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                                    activeSection === "leads" ? "bg-white text-[#183928]" : "bg-emerald-100 text-[#183928]"
                                }`}>
                                    {inquiries.length}
                                </span>
                            </button>

                            <button
                                onClick={() => setActiveSection("header")}
                                className={`w-full flex items-center gap-2.5 px-3.5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                                    activeSection === "header"
                                        ? "bg-[#183928] text-white shadow-sm"
                                        : "text-gray-600 hover:bg-emerald-50 hover:text-[#183928]"
                                }`}
                            >
                                <LayoutTemplate className="w-4 h-4" />
                                <span>Header & Navbar</span>
                            </button>

                            <button
                                onClick={() => setActiveSection("banner")}
                                className={`w-full flex items-center gap-2.5 px-3.5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                                    activeSection === "banner"
                                        ? "bg-[#183928] text-white shadow-sm"
                                        : "text-gray-600 hover:bg-emerald-50 hover:text-[#183928]"
                                }`}
                            >
                                <ImageIcon className="w-4 h-4" />
                                <span>Hero Banner</span>
                            </button>

                            <button
                                onClick={() => setActiveSection("showcase")}
                                className={`w-full flex items-center gap-2.5 px-3.5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                                    activeSection === "showcase"
                                        ? "bg-[#183928] text-white shadow-sm"
                                        : "text-gray-600 hover:bg-emerald-50 hover:text-[#183928]"
                                }`}
                            >
                                <Sparkles className="w-4 h-4" />
                                <span>Banner Feature Cards</span>
                            </button>

                            <button
                                onClick={() => setActiveSection("drinks")}
                                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                                    activeSection === "drinks"
                                        ? "bg-[#183928] text-white shadow-sm"
                                        : "text-gray-600 hover:bg-emerald-50 hover:text-[#183928]"
                                }`}
                            >
                                <div className="flex items-center gap-2.5">
                                    <Package className="w-4 h-4" />
                                    <span>Drinks Catalog</span>
                                </div>
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                                    activeSection === "drinks" ? "bg-white text-[#183928]" : "bg-gray-100 text-gray-600"
                                }`}>
                                    {products.length}
                                </span>
                            </button>

                            <button
                                onClick={() => setActiveSection("contact")}
                                className={`w-full flex items-center gap-2.5 px-3.5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                                    activeSection === "contact"
                                        ? "bg-[#183928] text-white shadow-sm"
                                        : "text-gray-600 hover:bg-emerald-50 hover:text-[#183928]"
                                }`}
                            >
                                <PhoneCall className="w-4 h-4" />
                                <span>Footer & Contact Lines</span>
                            </button>
                        </div>

                        {/* ================= ডানপাশের কনটেন্ট এরিয়া ================= */}
                        <div className="lg:col-span-9 space-y-6">
                            
                            {/* ১. CUSTOMER LEADS SECTION */}
                            {activeSection === "leads" && (
                                <div className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-900/5 space-y-4">
                                    <h3 className="text-base font-black text-[#112318]">Customer Inquiry Leads</h3>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-xs">
                                            <thead>
                                                <tr className="bg-gray-50 text-gray-500 font-bold uppercase border-b">
                                                    <th className="p-3">Customer</th>
                                                    <th className="p-3">Contact</th>
                                                    <th className="p-3">Reason</th>
                                                    <th className="p-3">Message</th>
                                                    <th className="p-3">Status</th>
                                                    <th className="p-3 text-right">Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y font-medium">
                                                {inquiries.length === 0 ? (
                                                    <tr>
                                                        <td colSpan={6} className="text-center py-8 text-gray-400">
                                                            No leads submitted yet.
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    inquiries.map((inq) => (
                                                        <tr key={inq.id} className="hover:bg-emerald-50/30">
                                                            <td className="p-3 font-bold text-[#112318]">{inq.name}</td>
                                                            <td className="p-3">
                                                                <a href={`tel:${inq.phone}`} className="text-[#183928] font-bold flex items-center gap-1">
                                                                    <PhoneCall className="w-3.5 h-3.5" />
                                                                    {inq.phone}
                                                                </a>
                                                            </td>
                                                            <td className="p-3">
                                                                <span className="bg-[#eef7ef] text-[#183928] text-[10px] font-bold px-2 py-0.5 rounded">
                                                                    {inq.inquiry_type}
                                                                </span>
                                                            </td>
                                                            <td className="p-3 max-w-xs text-gray-600">{inq.message}</td>
                                                            <td className="p-3">
                                                                <select
                                                                    value={inq.status}
                                                                    onChange={(e) => router.patch(`/admin/inquiries/${inq.id}/status`, { status: e.target.value }, { preserveScroll: true })}
                                                                    className="text-xs font-bold rounded-lg border-gray-200"
                                                                >
                                                                    <option value="pending">Pending</option>
                                                                    <option value="contacted">Contacted</option>
                                                                    <option value="resolved">Resolved</option>
                                                                </select>
                                                            </td>
                                                            <td className="p-3 text-right">
                                                                <button
                                                                    onClick={() => { if(confirm("Delete inquiry?")) router.delete(`/admin/inquiries/${inq.id}`, { preserveScroll: true }) }}
                                                                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer"
                                                                >
                                                                    <Trash2 className="w-4 h-4" />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* ২. HEADER & NAVBAR SECTION */}
                            {activeSection === "header" && (
                                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-900/5 space-y-6">
                                    <div>
                                        <h3 className="text-lg font-black text-[#112318]">Header & Navbar Setup</h3>
                                        <p className="text-xs text-gray-500">Update logo, company name, and top header hotline number.</p>
                                    </div>

                                    <form onSubmit={submitHeader} className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-xs font-bold text-gray-700 block mb-1">Brand Name (Text next to logo)</label>
                                                <input
                                                    type="text"
                                                    value={headerForm.data.brand_name}
                                                    onChange={(e) => headerForm.setData("brand_name", e.target.value)}
                                                    className="w-full text-xs rounded-xl border-gray-200 p-3"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold text-gray-700 block mb-1">Header Top Hotline</label>
                                                <input
                                                    type="text"
                                                    value={headerForm.data.header_phone}
                                                    onChange={(e) => headerForm.setData("header_phone", e.target.value)}
                                                    className="w-full text-xs rounded-xl border-gray-200 p-3"
                                                />
                                            </div>
                                        </div>

                                        <div className="p-5 rounded-2xl bg-[#f4faf4] border border-emerald-900/10 space-y-3">
                                            <label className="text-xs font-black text-[#183928] uppercase tracking-wider block">Website Logo</label>
                                            <div className="flex gap-4">
                                                <label className="flex items-center gap-1.5 text-xs font-bold cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        checked={headerForm.data.logo_type === "url"}
                                                        onChange={() => headerForm.setData("logo_type", "url")}
                                                    />
                                                    <span>Logo Image URL</span>
                                                </label>
                                                <label className="flex items-center gap-1.5 text-xs font-bold cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        checked={headerForm.data.logo_type === "file"}
                                                        onChange={() => headerForm.setData("logo_type", "file")}
                                                    />
                                                    <span>Upload from Computer</span>
                                                </label>
                                            </div>

                                            {headerForm.data.logo_type === "url" ? (
                                                <input
                                                    type="text"
                                                    placeholder="/images/logo.png or web link"
                                                    value={headerForm.data.logo_url}
                                                    onChange={(e) => headerForm.setData("logo_url", e.target.value)}
                                                    className="w-full text-xs rounded-xl border-gray-200 p-3"
                                                />
                                            ) : (
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => headerForm.setData("logo_file", e.target.files[0])}
                                                    className="w-full text-xs file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-[#183928] file:text-white cursor-pointer"
                                                />
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={headerForm.processing}
                                            className="bg-[#183928] text-white text-xs font-bold px-6 py-3.5 rounded-xl hover:bg-[#122c1f] flex items-center gap-2 cursor-pointer shadow"
                                        >
                                            <Save className="w-4 h-4" />
                                            <span>{headerForm.processing ? "Saving..." : "Save Header Settings"}</span>
                                        </button>
                                    </form>
                                </div>
                            )}

                            {/* ৩. HERO BANNER SECTION (একক ইমেজ ফর্ম) */}
                            {activeSection === "banner" && (
                                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-900/5 space-y-6">
                                    <div>
                                        <h3 className="text-lg font-black text-[#112318]">Hero Banner Setup</h3>
                                        <p className="text-xs text-gray-500">Upload a full-width banner image or paste an image link.</p>
                                    </div>

                                    <form onSubmit={submitBanner} className="space-y-5">
                                        <div className="p-5 rounded-2xl bg-[#f4faf4] border border-emerald-900/10 space-y-4">
                                            <label className="text-xs font-black text-[#183928] uppercase tracking-wider block">
                                                Banner Image Source
                                            </label>

                                            <div className="flex gap-4">
                                                <label className="flex items-center gap-1.5 text-xs font-bold cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        checked={bannerForm.data.banner_type === "url"}
                                                        onChange={() => bannerForm.setData("banner_type", "url")}
                                                    />
                                                    <span>Use Image Link (URL)</span>
                                                </label>
                                                <label className="flex items-center gap-1.5 text-xs font-bold cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        checked={bannerForm.data.banner_type === "file"}
                                                        onChange={() => bannerForm.setData("banner_type", "file")}
                                                    />
                                                    <span>Upload from Computer</span>
                                                </label>
                                            </div>

                                            {bannerForm.data.banner_type === "url" ? (
                                                <input
                                                    type="text"
                                                    placeholder="e.g. /images/banner.jpeg or https://..."
                                                    value={bannerForm.data.banner_url}
                                                    onChange={(e) => bannerForm.setData("banner_url", e.target.value)}
                                                    className="w-full text-xs rounded-xl border-gray-200 p-3"
                                                />
                                            ) : (
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => bannerForm.setData("banner_file", e.target.files[0])}
                                                    className="w-full text-xs file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-[#183928] file:text-white cursor-pointer"
                                                />
                                            )}

                                            {(bannerForm.data.banner_url || settings.banner_image) && (
                                                <div className="pt-2">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                                                        Current Live Banner Preview:
                                                    </span>
                                                    <img
                                                        src={bannerForm.data.banner_url || settings.banner_image}
                                                        alt="Live Banner Preview"
                                                        className="w-full max-h-48 object-cover rounded-xl border border-emerald-900/10"
                                                        onError={(e) => { e.target.src = "/images/banner.jpeg"; }}
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={bannerForm.processing}
                                            className="bg-[#183928] text-white text-xs font-bold px-6 py-3.5 rounded-xl hover:bg-[#122c1f] flex items-center gap-2 cursor-pointer shadow"
                                        >
                                            <Save className="w-4 h-4" />
                                            <span>{bannerForm.processing ? "Saving Banner..." : "Save Banner Image"}</span>
                                        </button>
                                    </form>
                                </div>
                            )}

                            {/* ৪. BANNER FEATURE CARDS (IMAGE + HOVER TEXT) */}
                            {activeSection === "showcase" && (
                                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-900/5 space-y-6">
                                    <div>
                                        <h3 className="text-lg font-black text-[#112318]">Banner Feature Cards (Image + Hover Text)</h3>
                                        <p className="text-xs text-gray-500">Edit the 3 visual cards right below the hero banner.</p>
                                    </div>

                                    <form onSubmit={submitCards} className="space-y-6">
                                        {cards.map((card, idx) => (
                                            <div key={idx} className="p-5 rounded-2xl bg-[#f4faf4] border border-emerald-900/10 space-y-3">
                                                <span className="text-xs font-black text-[#183928] uppercase tracking-wider block">
                                                    Card #{idx + 1}
                                                </span>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    <div>
                                                        <label className="text-[11px] font-bold text-gray-600 block mb-1">Image URL / Path</label>
                                                        <input
                                                            type="text"
                                                            value={card.image}
                                                            onChange={(e) => {
                                                                const next = [...cards];
                                                                next[idx].image = e.target.value;
                                                                setCards(next);
                                                            }}
                                                            className="w-full text-xs rounded-xl border-gray-200 p-2.5"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="text-[11px] font-bold text-gray-600 block mb-1">Card Title</label>
                                                        <input
                                                            type="text"
                                                            value={card.title}
                                                            onChange={(e) => {
                                                                const next = [...cards];
                                                                next[idx].title = e.target.value;
                                                                setCards(next);
                                                            }}
                                                            className="w-full text-xs rounded-xl border-gray-200 p-2.5"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="text-[11px] font-bold text-gray-600 block mb-1">Hover Text (Reveals on Hover)</label>
                                                    <textarea
                                                        rows={2}
                                                        value={card.hover_text}
                                                        onChange={(e) => {
                                                            const next = [...cards];
                                                            next[idx].hover_text = e.target.value;
                                                            setCards(next);
                                                        }}
                                                        className="w-full text-xs rounded-xl border-gray-200 p-2.5"
                                                    />
                                                </div>
                                            </div>
                                        ))}

                                        <button
                                            type="submit"
                                            className="bg-[#183928] text-white text-xs font-bold px-6 py-3.5 rounded-xl hover:bg-[#122c1f] flex items-center gap-2 cursor-pointer shadow"
                                        >
                                            <Save className="w-4 h-4" />
                                            <span>Save Feature Cards</span>
                                        </button>
                                    </form>
                                </div>
                            )}

                            {/* ৫. DRINKS CATALOG */}
                            {activeSection === "drinks" && (
                                <div className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-900/5 space-y-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-base font-black text-[#112318]">Drinks Catalog</h3>
                                            <p className="text-xs text-gray-500">Add, publish or delete drinks.</p>
                                        </div>
                                        <button
                                            onClick={() => setShowAddProductModal(true)}
                                            className="bg-[#183928] text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer shadow"
                                        >
                                            <Plus className="w-4 h-4" />
                                            <span>Add New Drink</span>
                                        </button>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-xs">
                                            <thead>
                                                <tr className="bg-gray-50 text-gray-500 font-bold uppercase border-b">
                                                    <th className="p-3">Drink</th>
                                                    <th className="p-3">Price</th>
                                                    <th className="p-3">Category</th>
                                                    <th className="p-3">Visibility</th>
                                                    <th className="p-3 text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y font-medium">
                                                {products.map((prod) => (
                                                    <tr key={prod.id} className="hover:bg-emerald-50/30">
                                                        <td className="p-3 flex items-center gap-3">
                                                            <img
                                                                src={prod.image}
                                                                alt={prod.name}
                                                                className="w-10 h-10 rounded-xl object-cover border"
                                                            />
                                                            <div>
                                                                <p className="font-bold text-[#112318]">{prod.name}</p>
                                                                <p className="text-[10px] text-gray-400">{prod.net_volume}</p>
                                                            </div>
                                                        </td>
                                                        <td className="p-3 font-bold text-[#183928]">{prod.price}</td>
                                                        <td className="p-3 uppercase text-[10px] text-gray-500">{prod.category}</td>
                                                        <td className="p-3">
                                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                                                prod.is_active ? "bg-emerald-100 text-emerald-800" : "bg-gray-100 text-gray-600"
                                                            }`}>
                                                                {prod.is_active ? "Published" : "Hidden"}
                                                            </span>
                                                        </td>
                                                        <td className="p-3 text-right space-x-2">
                                                            <button
                                                                onClick={() => router.patch(`/admin/products/${prod.id}/toggle`, {}, { preserveScroll: true })}
                                                                className="p-1.5 border rounded-lg hover:bg-gray-50 cursor-pointer"
                                                            >
                                                                {prod.is_active ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    if (confirm("Delete drink?")) {
                                                                        router.delete(`/admin/products/${prod.id}`, { preserveScroll: true });
                                                                    }
                                                                }}
                                                                className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer"
                                                            >
                                                                <Trash2 className="w-3.5 h-3.5" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* ৬. FOOTER & CONTACT LINES */}
                            {activeSection === "contact" && (
                                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-900/5 space-y-6">
                                    <div>
                                        <h3 className="text-lg font-black text-[#112318]">Footer & Contact Numbers</h3>
                                        <p className="text-xs text-gray-500">Update hotlines, WhatsApp, emails and office location shown on website.</p>
                                    </div>

                                    <form onSubmit={submitContact} className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-xs font-bold text-gray-700 block mb-1">Primary Helpline</label>
                                                <input
                                                    type="text"
                                                    value={contactForm.data.phone_primary}
                                                    onChange={(e) => contactForm.setData("phone_primary", e.target.value)}
                                                    className="w-full text-xs rounded-xl border-gray-200 p-3"
                                                />
                                            </div>

                                            <div>
                                                <label className="text-xs font-bold text-gray-700 block mb-1">Distribution Hotline</label>
                                                <input
                                                    type="text"
                                                    value={contactForm.data.phone_secondary}
                                                    onChange={(e) => contactForm.setData("phone_secondary", e.target.value)}
                                                    className="w-full text-xs rounded-xl border-gray-200 p-3"
                                                />
                                            </div>

                                            <div>
                                                <label className="text-xs font-bold text-gray-700 block mb-1">WhatsApp Number</label>
                                                <input
                                                    type="text"
                                                    value={contactForm.data.whatsapp_number}
                                                    onChange={(e) => contactForm.setData("whatsapp_number", e.target.value)}
                                                    className="w-full text-xs rounded-xl border-gray-200 p-3"
                                                />
                                            </div>

                                            <div>
                                                <label className="text-xs font-bold text-gray-700 block mb-1">Official Email</label>
                                                <input
                                                    type="email"
                                                    value={contactForm.data.email}
                                                    onChange={(e) => contactForm.setData("email", e.target.value)}
                                                    className="w-full text-xs rounded-xl border-gray-200 p-3"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-xs font-bold text-gray-700 block mb-1">Office & Production Address</label>
                                            <input
                                                type="text"
                                                value={contactForm.data.address}
                                                onChange={(e) => contactForm.setData("address", e.target.value)}
                                                className="w-full text-xs rounded-xl border-gray-200 p-3"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={contactForm.processing}
                                            className="bg-[#183928] text-white text-xs font-bold px-6 py-3.5 rounded-xl hover:bg-[#122c1f] flex items-center gap-2 cursor-pointer shadow"
                                        >
                                            <Save className="w-4 h-4" />
                                            <span>{contactForm.processing ? "Saving..." : "Save Contact Info"}</span>
                                        </button>
                                    </form>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>

            {/* নতুন প্রোডাক্ট যোগ করার মডাল */}
            {showAddProductModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-4">
                        <div className="flex items-center justify-between border-b pb-3">
                            <h3 className="text-base font-black text-[#112318]">Add New Botanical Drink</h3>
                            <button onClick={() => setShowAddProductModal(false)} className="text-gray-400 hover:text-gray-600 font-bold">✕</button>
                        </div>

                        <form onSubmit={submitNewProduct} className="space-y-3">
                            <div>
                                <label className="text-xs font-bold block mb-1">Drink Name *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Masala Lemonade"
                                    value={productForm.data.name}
                                    onChange={(e) => productForm.setData("name", e.target.value)}
                                    className="w-full text-xs rounded-xl border-gray-200"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-xs font-bold block mb-1">Price *</label>
                                    <input
                                        type="text"
                                        required
                                        value={productForm.data.price}
                                        onChange={(e) => productForm.setData("price", e.target.value)}
                                        className="w-full text-xs rounded-xl border-gray-200"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold block mb-1">Net Volume *</label>
                                    <input
                                        type="text"
                                        required
                                        value={productForm.data.net_volume}
                                        onChange={(e) => productForm.setData("net_volume", e.target.value)}
                                        className="w-full text-xs rounded-xl border-gray-200"
                                    />
                                </div>
                            </div>

                            <div className="p-3 bg-[#f4faf4] rounded-xl border space-y-2">
                                <label className="text-xs font-bold block">Product Image *</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-1.5 text-xs font-bold cursor-pointer">
                                        <input
                                            type="radio"
                                            checked={productForm.data.image_type === "url"}
                                            onChange={() => productForm.setData("image_type", "url")}
                                        />
                                        <span>Image URL</span>
                                    </label>
                                    <label className="flex items-center gap-1.5 text-xs font-bold cursor-pointer">
                                        <input
                                            type="radio"
                                            checked={productForm.data.image_type === "file"}
                                            onChange={() => productForm.setData("image_type", "file")}
                                        />
                                        <span>Upload File</span>
                                    </label>
                                </div>

                                {productForm.data.image_type === "url" ? (
                                    <input
                                        type="text"
                                        placeholder="e.g. /images/hozmi-cola.jpeg"
                                        value={productForm.data.image_url}
                                        onChange={(e) => productForm.setData("image_url", e.target.value)}
                                        className="w-full text-xs rounded-xl border-gray-200"
                                    />
                                ) : (
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => productForm.setData("image_file", e.target.files[0])}
                                        className="w-full text-xs file:mr-4 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:bg-[#183928] file:text-white cursor-pointer"
                                    />
                                )}
                            </div>

                            <div>
                                <label className="text-xs font-bold block mb-1">Short Description *</label>
                                <textarea
                                    rows={2}
                                    required
                                    value={productForm.data.short_description}
                                    onChange={(e) => productForm.setData("short_description", e.target.value)}
                                    className="w-full text-xs rounded-xl border-gray-200"
                                />
                            </div>

                            <div className="flex justify-end gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setShowAddProductModal(false)}
                                    className="px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-100 rounded-xl"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={productForm.processing}
                                    className="px-5 py-2 bg-[#183928] text-white text-xs font-bold rounded-xl"
                                >
                                    {productForm.processing ? "Adding..." : "Save Drink"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}